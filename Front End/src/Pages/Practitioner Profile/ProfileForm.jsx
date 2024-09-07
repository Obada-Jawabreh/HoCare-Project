import React from "react";
import FormField from "./FormField";

const ProfileForm = ({ formData, errors, handleInputChange }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Profession*"
          name="profession"
          type="select"
          value={formData.profession}
          onChange={handleInputChange}
          error={errors.profession}
          options={[
            { value: "", label: "Select your profession" },
            { value: "therapist", label: "Physical Therapist" },
            { value: "nurse", label: "Home Nurse" },
          ]}
        />
        <FormField
          label="Email*"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          error={errors.email}
        />
        <FormField
          label="Phone Number*"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          error={errors.phone}
        />
        <FormField
          label="University Degree*"
          name="degree"
          type="file"
          onChange={handleInputChange}
          error={errors.degree}
        />
        <FormField
          label="Professional License*"
          name="license"
          type="file"
          onChange={handleInputChange}
          error={errors.license}
        />
        <FormField
          label="CV/Resume*"
          name="cv"
          type="file"
          onChange={handleInputChange}
          error={errors.cv}
        />
        <FormField
          label="Certificates"
          name="certificates"
          type="file"
          onChange={handleInputChange}
          multiple
        />
        <FormField
          label="Criminal Record (if applicable)"
          name="criminalRecord"
          type="file"
          onChange={handleInputChange}
        />
        <FormField
          label="Professional Insurance"
          name="insurance"
          type="file"
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-6">
        <FormField
          label="Recommendations"
          name="recommendations"
          type="textarea"
          value={formData.recommendations}
          onChange={handleInputChange}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="bg-prim-button hover:bg-hover-button text-white px-8 py-2 rounded-full text-lg transition duration-300"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;