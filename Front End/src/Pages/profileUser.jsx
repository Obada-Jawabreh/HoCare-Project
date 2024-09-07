import React, { useState } from "react";

const ProfileUser = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    city: "Amman",
    university: "University of Jordan",
    college: "Engineering",
    role: "Student",
    birthdate: "2000-01-01",
    gender: "male",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the data
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#EEF6F9] p-4">
      <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
        Profile Settings
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center mb-4">
        <div className="flex flex-col md:flex-row items-center mb-6 md:mr-6 md:mb-0">
          <div className="w-24 h-24 rounded-full bg-zinc-300 mb-4 md:mb-0 md:mr-4"></div>
          <div className="flex flex-col space-y-2 md:space-y-0 gap-2">
            <button className="bg-prim-button text-white px-4 py-2 rounded mb-2 md:mb-0">
              Upload New Picture
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Remove Picture
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-muted-foreground">Name</label>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground">Contact Info</label>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground">Country & City</label>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              type="text"
              value="Jordan"
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground">
            Education Details
          </label>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            >
              <option>University of Jordan</option>
              {/* Add more options here */}
            </select>
            <select
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
              disabled={!isEditing}
            >
              <option>Engineering</option>
              {/* Add more options here */}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full p-1 border border-border rounded bg-gray-300 text-black"
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground">Birthdate</label>
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="w-full p-1 border border-border rounded bg-gray-300 text-black"
            disabled={!isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="block text-muted-foreground">Gender</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-1"
                disabled={!isEditing}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-1"
                disabled={!isEditing}
              />
              Female
            </label>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            className="bg-prim-button text-white px-4 py-2 rounded w-full"
            onClick={handleSave}
            disabled={!isEditing}
          >
            Save All Changes
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={handleEdit}
            disabled={isEditing}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;

// import React from "react";

// const ProfileUser = () => {
//   return (
//     <div className="bg-[#EEF6F9] p-4">
//       <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
//         Profile Settings
//       </h2>
//       <div className="flex flex-col md:flex-row items-start justify-center mb-4">
//         <div className="flex flex-col items-center mb-6 md:mr-6 md:mb-0">
//           <div className="w-24 h-24 rounded-full bg-zinc-300 mb-4"></div>
//           <div className="flex flex-col space-y-2">
//             <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
//               Upload New Picture
//             </button>
//             <button className="bg-red-600 text-white px-4 py-2 rounded">
//               Remove Picture
//             </button>
//           </div>
//         </div>
//         <div className="flex-1 max-w-md">
//           <div className="mb-4">
//             <label className="block text-muted-foreground">Name</label>
//             <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-muted-foreground">Contact Info</label>
//             <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-muted-foreground">Country & City</label>
//             <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
//               <input
//                 type="text"
//                 value="Jordan"
//                 className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
//               />
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="flex-1 p-1 border border-border rounded bg-gray-300 text-black"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-muted-foreground">Education Details</label>
//             <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
//               <select className="flex-1 p-1 border border-border rounded bg-gray-300 text-black">
//                 <option>University Name</option>
//               </select>
//               <select className="flex-1 p-1 border border-border rounded bg-gray-300 text-black">
//                 <option>College Name</option>
//               </select>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-muted-foreground">Role</label>
//             <input
//               type="text"
//               placeholder="Role"
//               className="w-full p-1 border border-border rounded bg-gray-300 text-black"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-muted-foreground">Birthdate</label>
//             <input
//               type="date"
//               className="w-full p-1 border border-border rounded bg-gray-300 text-black"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-muted-foreground">Gender</label>
//             <div className="flex items-center space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   className="mr-1"
//                 />
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   className="mr-1"
//                 />
//                 Female
//               </label>
//             </div>
//           </div>

// <button className="bg-prim-button text-white px-4 py-2 rounded w-full">
// Save All Changes
// </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileUser;
