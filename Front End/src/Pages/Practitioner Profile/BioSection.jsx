// BioSection.jsx
import React from 'react';
import { Edit } from 'lucide-react';

const BioSection = ({ therapist, editing, handleEdit, handleSave, setTherapist }) => (
  <div className="mb-6">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-2xl font-semibold">About Me</h2>
      {editing.bio ? (
        <button onClick={() => handleSave('bio')} className="text-blue-500">Save</button>
      ) : (
        <button onClick={() => handleEdit('bio')} className="text-gray-500">
          <Edit size={18} />
        </button>
      )}
    </div>
    {editing.bio ? (
      <textarea 
        value={therapist.bio} 
        onChange={(e) => setTherapist({ ...therapist, bio: e.target.value })}
        className="w-full h-32 border rounded p-2"
      />
    ) : (
      <p>{therapist.bio}</p>
    )}
  </div>
);

export default BioSection;
