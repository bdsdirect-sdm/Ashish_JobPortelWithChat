import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000');

const Chat: React.FC = () => {
    const { userId, agencyId } = useParams<{ userId: string; agencyId: string }>();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get(`/api/chat/${userId}/${agencyId}`);
            console.log('response', response.data);
            setMessages(response.data.data);
        };

        fetchMessages();

        socket.on('chat message', (msg: string) => {
            console.log('messages', msg);
            setMessages((prevMessages) => [...prevMessages, msg]);
        });

        return () => {
            socket.off('chat message');
        };
    }, [userId, agencyId]);

    const sendMessage = () => {
        socket.emit('chat message', { userId, agencyId, message });
        setMessage('');
    };

    return (
        <div>
            <div>
                {messages?.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;