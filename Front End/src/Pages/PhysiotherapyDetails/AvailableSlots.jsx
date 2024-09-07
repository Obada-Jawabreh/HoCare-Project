// AvailableSlots.js
import React from 'react';

const AvailableSlots = ({ availableSlots, selectedDate, selectedTime, onDateSelection, onTimeSelection }) => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Available Appointment Slots</h2>
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {Object.entries(availableSlots).map(([day, times]) => (
          <div key={day} className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">{day}</h3>
            <div className="grid grid-cols-1 gap-2">
              {times.map((time) => (
                <button
                  key={`${day}-${time}`}
                  className={`p-2 rounded-lg text-center ${
                    selectedDate === day && selectedTime === time
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    onDateSelection(day);
                    onTimeSelection(time);
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableSlots;
