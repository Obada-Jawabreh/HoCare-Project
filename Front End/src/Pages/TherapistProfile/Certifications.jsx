const Certifications = ({ certifications }) => {
    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
        <ul className="list-disc list-inside">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Certifications;
  