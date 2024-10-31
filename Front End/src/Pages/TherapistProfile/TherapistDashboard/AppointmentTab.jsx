import React, { useState, useEffect } from "react";
import { Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import Calendar from "./Calendar";
import AddData from "../../../Components/Hooks/customHooks/postData";

const AppointmentTab = ({
  appointments: initialAppointments,
  setAppointments,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [editingIndex, setEditingIndex] = useState(null);
  const [appointments, setLocalAppointments] = useState(
    initialAppointments || []
  );

  const {
    addData,
    loading: addDataLoading,
    error: addDataError,
    success,
  } = AddData("providermange", "add");

  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: "success",
        title: "Appointment Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      // Update parent state if needed
      setAppointments(appointments);
    }
    if (addDataError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: addDataError,
      });
    }
  }, [success, addDataError]);

  const generateTimeSlots = () => {
    return Array.from({ length: 48 }, (_, i) => {
      const hour = Math.floor(i / 2)
        .toString()
        .padStart(2, "0");
      const minute = i % 2 === 0 ? "00" : "30";
      return `${hour}:${minute}`;
    });
  };

  const timeSlots = generateTimeSlots();

  const isAppointmentExists = (date, start, end, excludeIndex = null) => {
    return appointments.some((app, index) => {
      if (excludeIndex !== null && index === excludeIndex) return false;

      const appDate = new Date(app.schedule_date);

      return (
        appDate.toDateString() === date.toDateString() &&
        ((start >= app.start_time && start < app.end_time) ||
          (end > app.start_time && end <= app.end_time) ||
          (start <= app.start_time && end >= app.end_time))
      );
    });
  };

  const handleAddAppointment = async () => {
    if (selectedDate && startTime && endTime) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        Swal.fire({
          icon: "error",
          title: "Invalid Date",
          text: "Cannot schedule appointments for past dates.",
        });
        return;
      }

      if (startTime >= endTime) {
        Swal.fire({
          icon: "error",
          title: "Invalid Time",
          text: "Start time must be before end time.",
        });
        return;
      }

      const appointmentExists = isAppointmentExists(
        selectedDate,
        startTime,
        endTime,
        editingIndex
      );
      if (appointmentExists) {
        Swal.fire({
          icon: "error",
          title: "Time Slot Unavailable",
          text: "This appointment time overlaps with an existing appointment. Please choose a different time.",
        });
        return;
      }

      const adjustedDate = new Date(selectedDate);
      adjustedDate.setMinutes(
        adjustedDate.getMinutes() - adjustedDate.getTimezoneOffset()
      );
      const formattedDate = adjustedDate.toISOString().split("T")[0];

      const appointmentData = {
        schedule_date: formattedDate,
        day_of_month: adjustedDate.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        month: adjustedDate.toLocaleDateString("en-US", { month: "short" }),
        start_time: startTime,
        end_time: endTime,
      };

      try {
        const response = await addData(appointmentData);

        if (response.success) {
          const newAppointment = {
            ...appointmentData,
            id: response.scheduleId,
          };

          if (editingIndex !== null) {
            const updatedAppointments = [...appointments];
            updatedAppointments[editingIndex] = newAppointment;
            setLocalAppointments(updatedAppointments);
            setEditingIndex(null);
          } else {
            setLocalAppointments((prevAppointments) => [
              ...prevAppointments,
              newAppointment,
            ]);
          }

          setSelectedDate(null);
          setStartTime("09:00");
          setEndTime("10:00");

          Swal.fire({
            icon: "success",
            title: "Appointment Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Failed to add appointment",
        });
      }
    }
  };

  const handleEdit = (index) => {
    const appointment = appointments[index];
    setSelectedDate(new Date(appointment.date));
    setStartTime(appointment.startTime);
    setEndTime(appointment.endTime);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      // Assuming you have a delete endpoint in your API
      // You would need to add a similar custom hook for delete functionality
      // const { deleteData } = DeleteData('providermanage', 'delete');
      // await deleteData(appointments[index].id);

      setLocalAppointments(appointments.filter((_, i) => i !== index));

      Swal.fire({
        icon: "success",
        title: "Appointment Deleted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete appointment",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#EEF6F9] rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#46808B]">
            Schedule Appointment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Calendar selectedDate={selectedDate} onChange={setSelectedDate} />
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <select
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46808B]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <select
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46808B]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleAddAppointment}
                disabled={addDataLoading}
                className={`w-full bg-[#46808B] hover:bg-[#5A9BAE] text-white py-2 px-4 rounded-md transition-colors duration-200 ${
                  addDataLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {addDataLoading
                  ? "Adding..."
                  : editingIndex !== null
                  ? "Update Appointment"
                  : "Add Appointment"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF6F9] rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#46808B]">
            Scheduled Appointments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-lg text-[#46808B]">
                      {new Date(app.schedule_date).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </p>
                    <p className="text-gray-600">
                      {new Date(app.schedule_date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-gray-600">
                      {app.start_time} - {app.end_time}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="text-[#46808B] hover:text-[#5A9BAE]"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTab;
