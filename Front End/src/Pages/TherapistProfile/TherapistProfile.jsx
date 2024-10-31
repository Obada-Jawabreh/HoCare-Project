import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser ,updateUser ,updateProfilePicture } from "../../Redux/users/userThunk";
import ProfileHeader from "./ProfileHeader";
import ContactInfo from "./ContactInfo ";
import AboutMe from "./AboutMe";
import CertificationsSection from "./Certifications";
import RatingsAndReviews from "./RatingsAndReviews";

const TherapistProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated } = useSelector((state) => state.user);
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture); 
  useEffect(() => {
    if (!loading && !user) {
      dispatch(fetchUser());
    }
    if (user) {
      setProfilePicture(user.profilePicture);
      navigate("/TherapistProfile");
    }
  }, [user, dispatch, loading, navigate]);

  const handleUpdateUser = async (updatedData) => {
    try {
      await dispatch(updateUser(updatedData));
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleProfilePictureChange = (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      dispatch(updateProfilePicture(formData))
        .unwrap()
        .then((response) => {
          console.log("Profile picture updated successfully");
          setProfilePicture(response.newImagePath);
        })
        .catch((error) => {
          console.error("Error updating profile picture:", error);
        });
    } else {
      console.error("No file selected in TherapistProfile");
    }
  };

  if (!user)
    return (
      <div className="flex justify-center items-center h-screen">
        No user data available
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden mt-12">
        <ProfileHeader
          user={user}
          navigate={navigate}
          onProfilePictureChange={handleProfilePictureChange}
          onUpdateUser={handleUpdateUser}
          profilePicture={profilePicture} 
        />
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ContactInfo user={user} onUpdateUser={handleUpdateUser} />
            <AboutMe user={user} onUpdateUser={handleUpdateUser} />
          </div>
          <div>
            <CertificationsSection user={user} />
            <RatingsAndReviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
