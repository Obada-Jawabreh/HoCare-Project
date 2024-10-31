import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import DoctorInfo from "./DoctorInfo";
import ServiceList from "./ServiceList";
import BookingSummary from "./BookingSummary";
import AppointmentScheduler from "./AppointmentScheduler";
import Reviews from "./Reviews";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProviderById } from "../../Redux/providers/providerThunk";
import useFetchDataById from "../../Components/Hooks/customHooks/getByID";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: servicesData,
    loading: fetchLoading,
    error: fetchError,
  } = useFetchDataById("provider", "services", id);

  const {
    data: appointments,
    loading: fetchAppointmentsLoading,
    error: fetchAppointmentsError,
  } = useFetchDataById("provider", "appointments", id);

  const dispatch = useDispatch();
  const { selectedProvider, loading, error } = useSelector(
    (state) => state.providers
  );

  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedScheduleId, setSelectedScheduleId] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchProviderById(id));
    }
  }, [id, dispatch]);

  const handleServiceSelection = (service) => {
    const updatedServices = [...selectedServices];
    const index = updatedServices.findIndex((s) => s.name === service.name);
    if (index !== -1) {
      updatedServices.splice(index, 1);
    } else {
      updatedServices.push(service);
    }
    setSelectedServices(updatedServices);
    calculateTotalPrice(updatedServices);
  };

  const calculateTotalPrice = (services) => {
    const total = services.reduce((sum, service) => sum + service.price, 0);
    setTotalPrice(total);
  };

  const handleTimeSlotSelect = (startTime, scheduleId) => {
    setSelectedTimeSlot(startTime);
    setSelectedScheduleId(scheduleId);
  };

  const handleContinue = () => {
    if (selectedServices.length === 0 || !selectedDate || !selectedTimeSlot) {
      Swal.fire({
        title: "Incomplete Booking",
        text: "Please select services, date, and time before continuing.",
        icon: "warning",
      });
      return;
    }

    Cookies.set("appointmentId", selectedScheduleId);
    if (selectedServices.length > 0) {
      Cookies.set("serviceId", selectedServices[0].service_id);
    }

    navigate("/checkout");
  };

  if (fetchLoading || loading) return <div>Loading...</div>;
  if (fetchError || error)
    return <div>Error: {fetchError?.message || error?.message}</div>;

  return (
    <>
      <DoctorInfo provider={selectedProvider} />
      <div className="flex flex-col md:flex-row p-6 bg-gray-100">
        <ServiceList
          selectedServices={selectedServices}
          handleServiceSelection={handleServiceSelection}
          services={servicesData}
        />

        <BookingSummary
          selectedServices={selectedServices}
          totalPrice={totalPrice}
          selectedDate={selectedDate}
          selectedTimeSlot={selectedTimeSlot}
          handleContinue={handleContinue}
        />
      </div>
      <AppointmentScheduler
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        selectedTimeSlot={selectedTimeSlot}
        onSelectTimeSlot={handleTimeSlotSelect}
        appointments={appointments}
      />
      <Reviews />
    </>
  );
}

export default Details;
