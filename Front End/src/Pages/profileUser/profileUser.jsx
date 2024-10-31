import React, { useState, useEffect } from "react";
import {
  Camera,
  Edit,
  Phone,
  Mail,
  Award,
  Calendar,
  Clock,
  Save,
} from "lucide-react";
import defaultImage from "./../../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  updateUser,
  updateProfilePicture,
} from "../../Redux/users/userThunk";

export default function DataProfile() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const [isEditing, setIsEditing] = useState({
    name: false,
    phone: false,
  });

  const [editedValues, setEditedValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (user) {
      setEditedValues({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
      });
    }
  }, [user]);

  const [currentImageUrl, setCurrentImageUrl] = useState(
    user?.profilePicture
      ? `http://localhost:5001/${user.profilePicture}`
      : defaultImage
  );

  useEffect(() => {
    if (user?.profilePicture) {
      setCurrentImageUrl(`http://localhost:5001/${user.profilePicture}`);
    }
  }, [user?.profilePicture]);

  const handleEdit = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleUpdate = async (field) => {
    try {
      let updateData = {};
      
      if (field === "name") {
        updateData = {
          firstName: editedValues.firstName,
          lastName: editedValues.lastName,
        };
      } else if (field === "phone") {
        updateData = { phoneNumber: editedValues.phoneNumber };
      }

      await dispatch(updateUser(updateData)).unwrap();
      setIsEditing((prev) => ({ ...prev, [field]: false }));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleProfilePictureChange = (file) => {
    if (file) {
      const tempUrl = URL.createObjectURL(file);
      setCurrentImageUrl(tempUrl);

      const formData = new FormData();
      formData.append("image", file);

      dispatch(updateProfilePicture(formData))
        .unwrap()
        .then((response) => {
          setCurrentImageUrl(`http://localhost:5001/${response.newImagePath}`);
          URL.revokeObjectURL(tempUrl);
        })
        .catch((error) => {
          console.error("Error updating profile picture:", error);
          setCurrentImageUrl(
            user?.profilePicture
              ? `http://localhost:5001/${user.profilePicture}`
              : defaultImage
          );
        });
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    handleProfilePictureChange(file);
  };

  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-prim-button";
      case "scheduled":
        return "bg-pin";
      case "pending":
        return "bg-custom-red";
      default:
        return "bg-text-second";
    }
  };

  return (
    <div className="min-h-screen bg-prim-dark p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-prime-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black">My Profile</h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* User Info Section */}
            <div className="lg:w-1/3">
              <div className="bg-prim-dark rounded-xl p-6">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={currentImageUrl}
                    alt={fullName}
                    className="rounded-full w-full h-full object-cover border-4 border-prim-button"
                    onError={(e) => {
                      e.target.src = defaultImage;
                    }}
                  />
                  <label className="absolute bottom-0 right-0 bg-prim-button rounded-full p-2 cursor-pointer hover:bg-hover-button transition-colors duration-300">
                    <Camera className="text-prime-white" size={20} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Name */}
                  <div className="flex items-center justify-between bg-prime-white rounded-lg p-3">
                    {isEditing.name ? (
                      <div className="flex-1 flex items-center justify-between">
                        <div className="flex-1 space-y-2">
                          <input
                            type="text"
                            value={editedValues.firstName}
                            onChange={(e) =>
                              setEditedValues(prev => ({
                                ...prev,
                                firstName: e.target.value
                              }))
                            }
                            placeholder="First Name"
                            className="bg-transparent text-xl font-bold text-black focus:outline-none w-full mb-2"
                          />
                          <input
                            type="text"
                            value={editedValues.lastName}
                            onChange={(e) =>
                              setEditedValues(prev => ({
                                ...prev,
                                lastName: e.target.value
                              }))
                            }
                            placeholder="Last Name"
                            className="bg-transparent text-xl font-bold text-black focus:outline-none w-full"
                          />
                        </div>
                        <Save
                          className="cursor-pointer text-prim-button hover:text-hover-button transition-colors duration-300 ml-2"
                          size={18}
                          onClick={() => handleUpdate("name")}
                        />
                      </div>
                    ) : (
                      <>
                        <span className="text-xl font-bold text-black">
                          {fullName}
                        </span>
                        <Edit
                          className="cursor-pointer text-prim-button hover:text-hover-button transition-colors duration-300"
                          size={18}
                          onClick={() => handleEdit("name")}
                        />
                      </>
                    )}
                  </div>

                  {/* Email - Read Only */}
                  <div className="flex items-center bg-prime-white rounded-lg p-3">
                    <div className="flex items-center flex-1">
                      <Mail className="text-prim-button mr-2" size={18} />
                      <span className="text-black">
                        {user?.email || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between bg-prime-white rounded-lg p-3">
                    <div className="flex items-center flex-1">
                      <Phone className="text-prim-button mr-2" size={18} />
                      {isEditing.phone ? (
                        <div className="flex-1 flex items-center justify-between">
                          <input
                            type="tel"
                            value={editedValues.phoneNumber}
                            onChange={(e) =>
                              setEditedValues(prev => ({
                                ...prev,
                                phoneNumber: e.target.value
                              }))
                            }
                            className="bg-transparent text-black focus:outline-none w-full"
                          />
                          <Save
                            className="cursor-pointer text-prim-button hover:text-hover-button transition-colors duration-300 ml-2"
                            size={18}
                            onClick={() => handleUpdate("phone")}
                          />
                        </div>
                      ) : (
                        <span className="text-black">
                          {user?.phoneNumber || "N/A"}
                        </span>
                      )}
                    </div>
                    {!isEditing.phone && (
                      <Edit
                        className="cursor-pointer text-prim-button hover:text-hover-button transition-colors duration-300"
                        size={18}
                        onClick={() => handleEdit("phone")}
                      />
                    )}
                  </div>

                  {/* Points - Static */}
                  <div className="flex items-center justify-center bg-prime-white rounded-lg p-4">
                    <Award className="text-[#FFD700] mr-2" size={24} />
                    <span className="text-2xl font-bold text-black">150</span>
                    <span className="text-black ml-2">Points</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bookings Section */}
            <div className="lg:w-2/3">
              <div className="bg-prim-dark rounded-xl p-6">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Booked Services
                </h2>
                <div className="space-y-4">
                  {user?.bookings?.map((booking) => (
                    <div
                      key={booking.booking_id}
                      className="bg-prime-white rounded-lg p-4"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-semibold text-black">
                          Service
                        </h3>
                        <span
                          className={`${getStatusColor(
                            booking.status
                          )} px-3 py-1 rounded-full text-prime-white text-sm`}
                        >
                          {booking.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center text-black">
                          <Calendar
                            size={16}
                            className="mr-2 text-prim-button"
                          />
                          {new Date(booking.booking_date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-black">
                          <Clock size={16} className="mr-2 text-prim-button" />
                          {booking.booking_time}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <span className="text-prim-button font-semibold ">
                          ${booking.total_price}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center">
                        <Award size={16} className="mr-2 text-[#FFD700]" />
                        <span className="text-prim-button font-semibold">
                          20
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}