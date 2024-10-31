import React, { useState } from 'react';
import { Camera, Phone, Edit } from 'lucide-react';

const ContactInfo = ({ user, onUpdateUser }) => {
  const [editing, setEditing] = useState({
    phoneNumber: false,
  });
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");

  const handleEdit = (field) => {
    setEditing({ ...editing, [field]: true });
  };

  const handleSave = async (field) => {
    setEditing({ ...editing, [field]: false });
    if (field === 'phoneNumber') {
      await onUpdateUser({ phoneNumber });
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Camera size={20} className="text-blue-500" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-blue-500" />
            {editing.phoneNumber ? (
              <input 
                type="tel" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span>{phoneNumber}</span>
            )}
          </div>
          {editing.phoneNumber ? (
            <button onClick={() => handleSave('phoneNumber')} className="text-blue-500 font-semibold">Save</button>
          ) : (
            <button onClick={() => handleEdit('phoneNumber')} className="text-gray-500">
              <Edit size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;