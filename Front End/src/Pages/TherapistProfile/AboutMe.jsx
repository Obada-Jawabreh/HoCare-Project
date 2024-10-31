import React, { useState } from 'react';
import { Edit } from 'lucide-react';

const AboutMe = ({ user, onUpdateUser }) => {
  const [editing, setEditing] = useState(false);
  const [aboutMe, setAboutMe] = useState(user.aboutMe || "");

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    setEditing(false);
    await onUpdateUser({ aboutMe });
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        {editing ? (
          <button onClick={handleSave} className="text-blue-500 font-semibold">Save</button>
        ) : (
          <button onClick={handleEdit} className="text-gray-500">
            <Edit size={18} />
          </button>
        )}
      </div>
      {editing ? (
        <textarea
          value={aboutMe}
          onChange={(e) => setAboutMe(e.target.value)}
          className="w-full h-40 border rounded p-2 focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <p className="text-gray-700 leading-relaxed">{aboutMe}</p>
      )}
    </div>
  );
};

export default AboutMe;