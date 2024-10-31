import React, { useState } from "react";

const Calendar = ({ selectedDate, onChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  const prevMonth = () => {
    const today = new Date();
    const firstOfNextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    if (firstOfNextMonth >= today) {
      setCurrentMonth(firstOfNextMonth);
    }
  };
  
  const isSelected = (day) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isDateDisabled = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={prevMonth} 
          className={`text-[#46808B] p-1 ${
            new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1) < new Date() 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:text-[#5A9BAE]'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-[#46808B]">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button onClick={nextMonth} className="text-[#46808B] hover:text-[#5A9BAE] p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-600 mb-2">
            {day}
          </div>
        ))}
        
        {emptyDays.map(day => (
          <div key={`empty-${day}`} className="h-10 w-10" />
        ))}
        
        {days.map(day => (
          <div key={`day-${day}`} className="flex justify-center">
            <button
              onClick={() => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                if (!isDateDisabled(day)) {
                  onChange(date);
                }
              }}
              disabled={isDateDisabled(day)}
              className={`h-10 w-10 flex items-center justify-center rounded-full text-sm
                ${isSelected(day) 
                  ? 'bg-[#46808B] text-white font-semibold' 
                  : isDateDisabled(day)
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'hover:bg-[#B9D9D6] text-gray-700'}`}
            >
              {day}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;