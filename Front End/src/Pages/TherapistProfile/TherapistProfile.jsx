// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   User, Mail, Phone, Award, BookOpen, Calendar, Star, MessageSquare, Edit
// } from 'lucide-react';

// const TherapistProfile = () => {
//   // Dummy data - replace with actual data from your backend
//   const [therapist, setTherapist] = useState({
//     name: "Dr. Sarah Johnson",
//     title: "Physiotherapist",
//     email: "sarah.johnson@example.com",
//     phone: "+1 (555) 123-4567",
//     rating: 4.8,
//     reviews: 127,
//     bio: "Dr. Sarah Johnson is a certified physiotherapist with over 10 years of experience in rehabilitative care. She specializes in sports injuries and post-operative recovery.",
//     education: [
//       { degree: "Doctor of Physical Therapy", institution: "University of California, Los Angeles", year: 2010 },
//       { degree: "Bachelor of Science in Kinesiology", institution: "University of Michigan", year: 2007 }
//     ],
//     certifications: [
//       "Certified Orthopedic Manual Therapist (COMT)",
//       "Sports Physiotherapy Certification",
//       "Dry Needling Certification"
//     ],
//     services: [
//       { name: "Initial Consultation", price: 150 },
//       { name: "Follow-up Session", price: 100 },
//       { name: "Sports Injury Treatment", price: 120 },
//       { name: "Post-operative Rehabilitation", price: 130 }
//     ]
//   });

//   const [editing, setEditing] = useState({
//     bio: false,
//     phone: false,
//     email: false
//   });

//   const handleEdit = (field) => {
//     setEditing({ ...editing, [field]: true });
//   };

//   const handleSave = (field) => {
//     setEditing({ ...editing, [field]: false });
//     // Here you would typically send the updated data to your backend
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-100">
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-12">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center space-x-4">
//               <div className="w-24 h-24 rounded-full bg-white p-1">
//                 <img 
//                   src="https://via.placeholder.com/150" 
//                   alt="Profile" 
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold">{therapist.name}</h1>
//                 <p className="text-xl">{therapist.title}</p>
//               </div>
//             </div>
//             <Link 
//               to="/TherapistDashboard" 
//               className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
//             >
//               Dashboard
//             </Link>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Left Column */}
//           <div>
//             {/* Contact Info */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-3">Contact Information</h2>
//               <div className="flex items-center justify-between mb-2">
//                 <div className="flex items-center space-x-2">
//                   <Mail size={18} />
//                   {editing.email ? (
//                     <input 
//                       type="email" 
//                       value={therapist.email} 
//                       onChange={(e) => setTherapist({...therapist, email: e.target.value})}
//                       className="border rounded px-2 py-1"
//                     />
//                   ) : (
//                     <span>{therapist.email}</span>
//                   )}
//                 </div>
//                 {editing.email ? (
//                   <button onClick={() => handleSave('email')} className="text-blue-500">Save</button>
//                 ) : (
//                   <button onClick={() => handleEdit('email')} className="text-gray-500"><Edit size={18} /></button>
//                 )}
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-2">
//                   <Phone size={18} />
//                   {editing.phone ? (
//                     <input 
//                       type="tel" 
//                       value={therapist.phone} 
//                       onChange={(e) => setTherapist({...therapist, phone: e.target.value})}
//                       className="border rounded px-2 py-1"
//                     />
//                   ) : (
//                     <span>{therapist.phone}</span>
//                   )}
//                 </div>
//                 {editing.phone ? (
//                   <button onClick={() => handleSave('phone')} className="text-blue-500">Save</button>
//                 ) : (
//                   <button onClick={() => handleEdit('phone')} className="text-gray-500"><Edit size={18} /></button>
//                 )}
//               </div>
//             </div>

//             {/* Bio */}
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-3">
//                 <h2 className="text-2xl font-semibold">About Me</h2>
//                 {editing.bio ? (
//                   <button onClick={() => handleSave('bio')} className="text-blue-500">Save</button>
//                 ) : (
//                   <button onClick={() => handleEdit('bio')} className="text-gray-500"><Edit size={18} /></button>
//                 )}
//               </div>
//               {editing.bio ? (
//                 <textarea 
//                   value={therapist.bio} 
//                   onChange={(e) => setTherapist({...therapist, bio: e.target.value})}
//                   className="w-full h-32 border rounded p-2"
//                 />
//               ) : (
//                 <p>{therapist.bio}</p>
//               )}
//             </div>

//             {/* Education */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-3">Education</h2>
//               {therapist.education.map((edu, index) => (
//                 <div key={index} className="mb-2">
//                   <p className="font-semibold">{edu.degree}</p>
//                   <p>{edu.institution}, {edu.year}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column */}
//           <div>
//             {/* Certifications */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
//               <ul className="list-disc list-inside">
//                 {therapist.certifications.map((cert, index) => (
//                   <li key={index}>{cert}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-3">Services & Pricing</h2>
//               <div className="grid grid-cols-1 gap-4">
//                 {therapist.services.map((service, index) => (
//                   <div key={index} className="bg-gray-100 p-3 rounded flex justify-between items-center">
//                     <p className="font-semibold">{service.name}</p>
//                     <p>${service.price}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Ratings and Reviews */}
//             <div className="mb-6">
//               <h2 className="text-2xl font-semibold mb-3">Ratings and Reviews</h2>
//               <div className="flex items-center space-x-2">
//                 <Star className="text-yellow-400" fill="currentColor" />
//                 <span className="font-bold">{therapist.rating}</span>
//                 <span>({therapist.reviews} reviews)</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TherapistProfile;


// TherapistProfile.jsx
import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ContactInfo from './ContactInfo ';
import BioSection from './BioSection';
import EducationSection from './EducationSection';
import CertificationsSection from './Certifications';
import ServicesSection from './Services';
import RatingsAndReviews from './RatingsAndReviews';

const TherapistProfile = () => {
  const [therapist, setTherapist] = useState({
    name: "Dr. Sarah Johnson",
    title: "Physiotherapist",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    rating: 4.8,
    reviews: 127,
    bio: "Dr. Sarah Johnson is a certified physiotherapist with over 10 years of experience in rehabilitative care. She specializes in sports injuries and post-operative recovery.",
    education: [
      { degree: "Doctor of Physical Therapy", institution: "University of California, Los Angeles", year: 2010 },
      { degree: "Bachelor of Science in Kinesiology", institution: "University of Michigan", year: 2007 }
    ],
    certifications: [
      "Certified Orthopedic Manual Therapist (COMT)",
      "Sports Physiotherapy Certification",
      "Dry Needling Certification"
    ],
    services: [
      { name: "Initial Consultation", price: 150 },
      { name: "Follow-up Session", price: 100 },
      { name: "Sports Injury Treatment", price: 120 },
      { name: "Post-operative Rehabilitation", price: 130 }
    ]
  });

  const [editing, setEditing] = useState({
    bio: false,
    phone: false,
    email: false
  });

  const handleEdit = (field) => {
    setEditing({ ...editing, [field]: true });
  };

  const handleSave = (field) => {
    setEditing({ ...editing, [field]: false });
    // هنا يمكنك إرسال البيانات المحدثة إلى الخادم
    console.log(`Saved ${field}:`, therapist[field]);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-12">
        {/* Header */}
        <ProfileHeader 
          name={therapist.name} 
          title={therapist.title} 
          profileImage="https://via.placeholder.com/150" 
        />

        {/* Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            {/* Contact Info */}
            <ContactInfo 
              therapist={therapist} 
              editing={editing} 
              handleEdit={handleEdit} 
              handleSave={handleSave} 
              setTherapist={setTherapist} 
            />

            {/* Bio */}
            <BioSection 
              therapist={therapist} 
              editing={editing} 
              handleEdit={handleEdit} 
              handleSave={handleSave} 
              setTherapist={setTherapist} 
            />

            {/* Education */}
            <EducationSection education={therapist.education} />
          </div>

          {/* Right Column */}
          <div>
            {/* Certifications */}
            <CertificationsSection certifications={therapist.certifications} />

            {/* Services */}
            <ServicesSection services={therapist.services} />

            {/* Ratings and Reviews */}
            <RatingsAndReviews rating={therapist.rating} reviews={therapist.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
