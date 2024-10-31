import React, { useState, useEffect } from "react";
import {
  CalendarIcon,
  Users,
  MessageSquare,
  Star,
  BarChart2,
  Package,
} from "lucide-react";
import TherapistHeader from "./Header";
import TabButton from "./TabButton";
import AppointmentTab from "./AppointmentTab";
import ServicesTab from "./ServicesTab";
import ClientsTab from "./ClientsTab";
import ChatTab from "./ChatTab";
import ReviewsTab from "./ReviewsTab";
import AnalyticsTab from "./AnalyticsTab";
import { fetchUser } from "../../../Redux/users/userThunk";
import { useDispatch, useSelector } from "react-redux";
import AddData from "../../../Components/Hooks/customHooks/postData";

const TherapistDashboard = () => {
  const dispatch = useDispatch();
  const {
    user,
    loading: userLoading,
    error: userError,
    isAuthenticated,
  } = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);

  // Use the custom hook for fetching appointments
  const {
    getData: fetchAppointments,
    loading: appointmentsLoading,
    error: appointmentsError,
  } = AddData("providermange", "get");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    const getAppointments = async () => {
      try {
        const data = await fetchAppointments();
        if (data) {
          setAppointments(data);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    getAppointments();
  }, []);

  const tabComponents = {
    appointments: (
      <AppointmentTab
        appointments={appointments}
        setAppointments={setAppointments}
      />
    ),
    services: <ServicesTab services={services} setServices={setServices} />,
    clients: <ClientsTab />,
    chat: <ChatTab />,
    reviews: <ReviewsTab />,
    analytics: <AnalyticsTab />,
  };

  const tabIcons = {
    appointments: CalendarIcon,
    services: Package,
    clients: Users,
    chat: MessageSquare,
    reviews: Star,
    analytics: BarChart2,
  };

  if (userLoading || appointmentsLoading) {
    return <div>Loading...</div>;
  }

  if (userError || appointmentsError) {
    return <div>Error: {userError || appointmentsError}</div>;
  }

  return (
    <div className="min-h-screen bg-[#prime-white]">
      <div className="container mx-auto p-6 space-y-6">
        <TherapistHeader user={user} />

        <div className="bg-white rounded-lg shadow-md p-2 flex space-x-2 overflow-x-auto">
          {Object.keys(tabComponents).map((tab) => {
            const Icon = tabIcons[tab];
            return (
              <TabButton
                key={tab}
                icon={Icon}
                label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            );
          })}
        </div>

        <div className="mt-6">{tabComponents[activeTab]}</div>
      </div>
    </div>
  );
};

export default TherapistDashboard;
