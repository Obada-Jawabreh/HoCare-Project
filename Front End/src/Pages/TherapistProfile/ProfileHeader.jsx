import React, { useState } from 'react'; 
import { Camera, Edit } from 'lucide-react'; 

const ProfileHeader = ({ user, navigate, onProfilePictureChange, onUpdateUser, profilePicture }) => {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      onProfilePictureChange(file);  // تمرير الملف مباشرة
    }
  };

  const handleSave = async () => {
    setEditing(false);
    await onUpdateUser({ firstName, lastName });
  };

  return (
    <div className="bg-prim-dark p-4 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <div className="relative group">
            <img 
              src={`http://localhost:5001/${profilePicture}`}  // استخدام الصورة المحدثة
              alt={user.firstName}
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg transition-all duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <label htmlFor="profile-picture" className="cursor-pointer">
                <Camera size={32} className="text-white" />
                <input
                  type="file"
                  id="profile-picture"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </label>
            </div>
          </div>
          <div>
            {editing ? (
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white text-black px-2 rounded"
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white text-black px-2 rounded"
                />
                <button onClick={handleSave} className="bg-white text-black px-4 rounded">Save</button>
              </div>
            ) : (
              <div className="flex items-center">
                <h1 className="text-4xl font-bold text-black">{firstName} {lastName}</h1>
                <button onClick={() => setEditing(true)} className="ml-2 text-blue-300">
                  <Edit size={20} className='text-prim-button hover:text-hover-button'/>
                </button>
              </div>
            )}
            <p className="text-xl text-black">{user.profession === "physicalTherapist" ? "Physiotherapist" : ""}</p>
          </div>
        </div>
        <button 
          onClick={() => navigate("/TherapistDashboard")}
          className="bg-prim-button px-6 py-2 rounded-lg font-semibold hover:bg-hover-button transition duration-300"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
