import React from "react";
import { Calendar, Clock, User, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import useFetchDataById from "../../Components/Hooks/customHooks/getByID";
import defaultImage from "../../assets/images/defaultImage.png";
import { fetchUser } from "../../Redux/users/userThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const appointmentId = Cookies.get("appointmentId");
  const serviceId = Cookies.get("serviceId");
  const {
    data: appointmentData,
    loading: appointmentDataLoading,
    error: appointmentDataError,
  } = useFetchDataById("checkout", "appointment", appointmentId);
  const {
    data: serviceData,
    loading: serviceDataLoading,
    error: serviceDataError,
  } = useFetchDataById("checkout", "service", serviceId);

  // PayPal configuration
  const initialOptions = {
    clientId:
      "AXSHzO_ufOdxM-ouhu0UJ_8xAsr5RnrYC09jLAs5YTnLe97HTxEWyy7jXJ-Qm5Qh-Yid6GNCWX9DX807",
    currency: "USD",
    intent: "capture",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: serviceData?.price || "0",
            currency_code: "USD",
          },
          description: `Appointment with ${user?.firstName} ${user?.lastName}`,
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    try {
      const order = await actions.order.capture();
      console.log("Payment successful!", order);

      // Send appointment and service data to backend using axios
      const response = await axios.post(
        "http://localhost:5001/api/checkout/confirm-payment",
        {
          orderId: order.id,
          appointmentId: appointmentId,
          serviceId: serviceId,
          appointmentData,  
          serviceData,      
          paymentStatus: 'completed'
        },{withCredentials: true}
      );

      if (response.status === 200 || response.status === 201) {
        alert("Payment processed successfully!");
        // Clear cookies after successful payment
        Cookies.remove("appointmentId");
        Cookies.remove("serviceId");
        // Redirect to Catalog page
        navigate("/catalog");
      } else {
        throw new Error("Failed to confirm payment with backend");
      }
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Error processing payment. Please try again.");
    }
  };

  if (loading || appointmentDataLoading || serviceDataLoading) {
    return (
      <div className="min-h-screen bg-prim-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-prim-dark p-4">
      <div className="max-w-3xl mx-auto mt-8">
        <div className="bg-prime-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <h1 className="text-2xl font-bold text-black mb-6">
              Complete Your Booking
            </h1>

            {/* Therapist Information */}
            <div className="flex items-center gap-4 bg-prim-dark bg-opacity-5 p-4 rounded-xl mb-6">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-2 ring-prim-button">
                <img
                  src={`http://localhost:5001/${user?.profilePicture}`}
                  alt="Therapist"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">
                  {user?.firstName} {user?.lastName}
                </h3>
              </div>
            </div>

            {/* Appointment Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-prim-dark flex items-center justify-center">
                  <Calendar className="text-prim-button" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date</p>
                  <p className="font-medium">
                    {appointmentData?.schedule_date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-prim-dark flex items-center justify-center">
                  <Clock className="text-prim-button" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Time</p>
                  <p className="font-medium">
                    {appointmentData?.start_time} - {appointmentData?.end_time}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-prim-dark flex items-center justify-center">
                  <MapPin className="text-prim-button" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">
                    {appointmentData?.location || "Online"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-prim-dark flex items-center justify-center overflow-hidden">
                  <img
                    src={`http://localhost:5001/${serviceData?.profilePicture}`}
                    alt="User Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = defaultImage;
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Provider name</p>
                  <p className="font-medium">
                    {serviceData?.firstName} {serviceData?.lastName}
                  </p>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-8">
              <div className="flex justify-between text-black mb-2">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-medium">${serviceData?.price}</span>
              </div>

              <div className="flex justify-between text-black text-lg font-bold pt-2 border-t">
                <span>Total Amount</span>
                <span className="text-prim-button">
                  ${parseFloat(serviceData?.price)}
                </span>
              </div>
            </div>

            {/* PayPal Integration */}
            <div className="mt-8">
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "rect",
                    label: "pay",
                  }}
                />
              </PayPalScriptProvider>
              <p className="text-center text-sm text-gray-500 mt-2">
                Secure payment processed by PayPal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
