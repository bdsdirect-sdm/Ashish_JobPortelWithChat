// // FrontEnd/src/components/JobSeekerProfile.tsx
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const JobSeekerProfile: React.FC = () => {
//     const { id } = useParams<{ id: string }>();
//     const [jobSeeker, setJobSeeker] = useState<any>(null);

//     useEffect(() => {
//         const fetchJobSeeker = async () => {
//             const response = await axios.get(`/api/users/job-seeker/${id}`);
//             setJobSeeker(response.data);
//         };

//         fetchJobSeeker();
//     }, [id]);

//     if (!jobSeeker) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2>{jobSeeker.firstName} {jobSeeker.lastName}</h2>
//             <p>Email: {jobSeeker.email}</p>
//             <p>Contact: {jobSeeker.contact}</p>
//             <p>Gender: {jobSeeker.gender}</p>
//             {jobSeeker.resume && <a href={jobSeeker.resume} target="_blank" rel="noopener noreferrer">Download Resume</a>}
//             {jobSeeker.profileImg && <img src={jobSeeker.profileImg} alt="Profile" />}
//         </div>
//     );
// };

// export default JobSeekerProfile;