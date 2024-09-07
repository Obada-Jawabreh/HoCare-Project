const Education = ({ education }) => {
    return (
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{edu.degree}</p>
            <p>{edu.institution}, {edu.year}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Education;
  