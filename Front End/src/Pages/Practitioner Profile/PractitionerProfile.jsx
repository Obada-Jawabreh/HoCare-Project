import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileForm from "./ProfileForm";
import ApplicationStatus from "./ApplicationStatus";

const ProfileAuth = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    profession: "",
    email: "",
    phone: "",
    degree: null,
    license: null,
    cv: null,
    certificates: null,
    criminalRecord: null,
    insurance: null,
    recommendations: "",
  });
  const [errors, setErrors] = useState({});
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.profession) newErrors.profession = "Profession is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.degree) newErrors.degree = "Degree is required";
    if (!formData.license) newErrors.license = "License is required";
    if (!formData.cv) newErrors.cv = "CV is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setApplicationStatus("pending");
    }
  };

  return (
    <div className="bg-prime-white">
      <div className="container mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="w-full max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-prim-dark py-4 px-6">
            <h1 className="text-3xl font-bold text-center">
              Complete Your Profile
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <ProfileImage
              profileImage={profileImage}
              handleImageUpload={handleImageUpload}
            />
            <ProfileForm
              formData={formData}
              errors={errors}
              handleInputChange={handleInputChange}
            />
            <ApplicationStatus applicationStatus={applicationStatus} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileAuth;
