import React, { useState, useEffect } from "react";

const AppointmentScheduler = ({
  selectedDate,
  onSelectDate,
  selectedTimeSlot,
  onSelectTimeSlot,
  appointments,
}) => {
  console.log("appointments", appointments);

  // تحويل المواعيد إلى تنسيق أسهل للاستخدام
  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimeSlotsForDate, setAvailableTimeSlotsForDate] = useState(
    []
  );

  useEffect(() => {
    if (appointments) {
      // استخراج التواريخ الفريدة
      const dates = [...new Set(appointments.map((app) => app.schedule_date))];
      const formattedDates = dates.map((date) => new Date(date));
      setAvailableDates(formattedDates);
    }
  }, [appointments]);

  useEffect(() => {
    if (selectedDate && appointments) {
      // تحويل التاريخ المحدد إلى نفس التنسيق الموجود في البيانات
      const formattedSelectedDate = `${
        selectedDate.getMonth() + 1
      }/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;

      // البحث عن المواعيد المتاحة لهذا التاريخ
      const timeSlotsForDate = appointments
        .filter((app) => app.schedule_date === formattedSelectedDate)
        .map((app) => ({
          startTime: app.start_time.slice(0, 5),
          endTime: app.end_time.slice(0, 5),
          scheduleId: app.schedule_id,
        }));

      setAvailableTimeSlotsForDate(timeSlotsForDate);
    }
  }, [selectedDate, appointments]);

  const formatDate = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return {
      dayName: days[date.getDay()],
      dayNumber: date.getDate(),
      month: months[date.getMonth()],
    };
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Schedule Appointment</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Select Date</h3>
          <div className="flex overflow-x-auto pb-4 space-x-4">
            {availableDates.map((date) => {
              const { dayName, dayNumber, month } = formatDate(date);
              const isSelected =
                selectedDate &&
                date.toDateString() === selectedDate.toDateString();

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => onSelectDate(date)}
                  className={`flex-shrink-0 w-24 p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-200"
                  }`}
                >
                  <p className="text-sm font-medium text-gray-600">{dayName}</p>
                  <p className="text-2xl font-bold">{dayNumber}</p>
                  <p className="text-sm text-gray-600">{month}</p>
                </button>
              );
            })}
          </div>
        </div>

        {selectedDate && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Select Time</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {availableTimeSlotsForDate.map((slot) => {
  const isSelected = slot.startTime === selectedTimeSlot;

  return (
    <button
      key={slot.scheduleId}
      onClick={() => onSelectTimeSlot(slot.startTime, slot.scheduleId)} // تم تعديل هذا السطر
      className={`py-3 px-4 rounded-lg border text-center transition-all ${
        isSelected
          ? "bg-green-500 border-green-500 text-white"
          : "border-gray-200 hover:border-green-200 hover:bg-green-50"
      }`}
    >
      {slot.startTime} - {slot.endTime}
    </button>
  );
})}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentScheduler;
