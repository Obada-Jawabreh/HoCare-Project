// BookingSummary.js
import React from 'react';

const BookingSummary = ({ selectedServices, totalPrice, selectedDate, selectedTime, onContinue }) => {
  return (
    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg ml-0 md:ml-6 mt-6 md:mt-0">
      <h2 className="text-2xl font-bold mb-6">Booking Summary</h2>
      {selectedServices.map((service) => (
        <div key={service.name} className="flex justify-between mb-2">
          <span>{service.name}</span>
          <span>{service.price}JD</span>
        </div>
      ))}
      <div className="border-t border-gray-200 mt-4 pt-4">
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>{totalPrice}JD</span>
        </div>
      </div>
      <div className="mt-4">
        <p><strong>Selected Date:</strong> {selectedDate || 'Not selected'}</p>
        <p><strong>Selected Time:</strong> {selectedTime || 'Not selected'}</p>
      </div>
      <button 
        className="w-full mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default BookingSummary;
