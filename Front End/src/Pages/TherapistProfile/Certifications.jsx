import React from 'react';
import { Award, BookOpen, FileText } from 'lucide-react';

const CertificationsSection = ({ user }) => {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="space-y-3">
          {[user.certificate, user.licenseToPractice].map((cert, index) => {
            const certUrl = `http://localhost:5001/${cert}`;
            const certTitle = cert.includes('certificate') ? 'University degree' : 'License To Practice';
            const Icon = cert.includes('certificate') ? Award : BookOpen;
            return (
              <li key={index} className="flex items-center space-x-3">
                <Icon size={20} className="text-blue-500" />
                <a 
                  href={certUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline"
                >
                  View {certTitle}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <div className="flex items-center space-x-3">
          <FileText size={20} className="text-blue-500" />
          <a 
            href={`http://localhost:5001/${user.resume}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default CertificationsSection;