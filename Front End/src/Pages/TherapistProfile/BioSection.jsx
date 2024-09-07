import { Edit } from 'lucide-react';

const Bio = ({ bio, editing, setEditing, setTherapist, therapist }) => {
  const handleEdit = () => setEditing({ ...editing, bio: true });
  const handleSave = () => setEditing({ ...editing, bio: false });

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-semibold">About Me</h2>
        {editing.bio ? (
          <button onClick={handleSave} className="text-blue-500">Save</button>
        ) : (
          <button onClick={handleEdit} className="text-gray-500"><Edit size={18} /></button>
        )}
      </div>
      {editing.bio ? (
        <textarea
          value={bio}
          onChange={(e) => setTherapist({ ...therapist, bio: e.target.value })}
          className="w-full h-32 border rounded p-2"
        />
      ) : (
        <p>{bio}</p>
      )}
    </div>
  );
};

export default Bio;
