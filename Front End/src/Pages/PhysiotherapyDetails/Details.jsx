import dr from "./../../assets/images/dr.png";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// DoctorInfo Component
const DoctorInfo = () => (
  <div className="bg-prim-dark flex flex-col md:flex-row justify-between items-center p-6 pt-16">
    <div className="flex flex-col gap-6 md:gap-12 w-full md:w-auto text-center md:text-left ml-4 md:ml-0">
      <div>
        <h2 className="font-medium text-xl md:text-2xl">Dr: Hoda Khoori</h2>
        <p className="text-xs md:text-sm">Physiotherapist</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
        <p className="text-base md:text-lg">Experience <br /> 2+</p>
        <p className="text-base md:text-lg">Certification <br /> 5+</p>
        <p className="text-base md:text-lg">Patients <br /> 3K+</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center md:justify-start text-base md:text-lg">
        <div className="flex items-center">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="ml-2">4.5</span>
        </div>
        <div>Open until 12:00 AM</div>
        <div>Location: Amman</div>
      </div>
    </div>
    <div className="relative mx-auto md:mx-0 mt-6 md:mt-0 md:ml-6 lg:ml-12" style={{ marginRight: "20%" }}>
      <span className="block border-4 border-white p-2">
        <img className="object-cover w-48 h-48 md:w-64 md:h-64 p-4" src={dr} alt="Dr. Hoda Khoori" />
      </span>
    </div>
  </div>
);

// ServiceList Component
const ServiceList = ({ selectedServices, handleServiceSelection }) => {
  const services = [
    { name: "Therapeutic Exercises", price: 10 },
    { name: "Manual Therapy", price: 15 },
    { name: "Electrotherapy", price: 20 }
  ];

  return (
    <div className="flex flex-col gap-6 w-full md:w-2/3 bg-[#EEF6F9] p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Services</h2>
      <div className="flex flex-col gap-6">
        {services.map((service) => (
          <div key={service.name} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-lg font-bold">{service.price}JD</p>
            </div>
            <button 
              className={`px-4 py-2 ${selectedServices.some(s => s.name === service.name) ? 'bg-green-500' : 'bg-prim-button'} text-white rounded hover:opacity-80`}
              onClick={() => handleServiceSelection(service)}
            >
              {selectedServices.some(s => s.name === service.name) ? 'Selected' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// BookingSummary Component
const BookingSummary = ({ selectedServices, totalPrice, selectedDate, selectedTime, handleContinue }) => (
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
      className="w-full mt-6 px-4 py-2 bg-prim-button text-white rounded hover:bg-green-600"
      onClick={handleContinue}
    >
      Continue
    </button>
  </div>
);

// AvailableSlots Component
const AvailableSlots = ({ availableSlots, selectedDate, selectedTime, handleDateSelection, handleTimeSelection }) => (
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
                  handleDateSelection(day);
                  handleTimeSelection(time);
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

// Reviews Component
const Reviews = () => (
  <div className="p-6 bg-gray-100 md:flex-row">
    <h2 className="w-full text-2xl font-bold mb-6 md:text-left">Reviews</h2>
    <div className="flex flex-wrap gap-6 justify-center">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex items-center gap-4">
            <img src={dr} alt="User" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-semibold">Ahmad</h3>
              <p className="text-sm text-gray-500">May 8, 2024</p>
              <p className="mt-2 text-gray-700 line-clamp-3">
                Nice, this is a long review to demonstrate how to handle overflow and text clamping in a review section. This text should be truncated if it exceeds the defined number of lines.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Details Component
function Details() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [availableSlots, setAvailableSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    const mockSlots = {
      'Sunday': ['09:00', '10:00', '11:00', '14:00', '15:00'],
      'Monday': ['10:00', '11:00', '14:00', '16:00'],
      'Tuesday': ['09:00', '11:00', '15:00', '16:00'],
      'Wednesday': ['09:00', '10:00', '14:00', '15:00'],
      'Thursday': ['10:00', '11:00', '14:00', '16:00'],
      'Friday': ['09:00', '10:00', '11:00', '15:00'],
      'Saturday': ['10:00', '11:00', '14:00', '15:00'],
    };
    setAvailableSlots(mockSlots);
  }, []);

  const handleServiceSelection = (service) => {
    const updatedServices = [...selectedServices];
    const index = updatedServices.findIndex(s => s.name === service.name);
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

  const handleDateSelection = (day) => {
    setSelectedDate(day);
    setSelectedTime('');
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedServices.length === 0 || !selectedDate || !selectedTime) {
      alert('Please select services, date, and time before continuing.');
      return;
    }

    const serviceSummary = selectedServices.map(service => `${service.name}: ${service.price}JD`).join('\n');

    Swal.fire({
      title: 'Booking Summary',
      html: `
        <div style="text-align: left;">
          <p><strong>Services:</strong></p>
          <pre>${serviceSummary}</pre>
          <p><strong>Total Price:</strong> ${totalPrice}JD</p>
          <p><strong>Date:</strong> ${selectedDate}</p>
          <p><strong>Time:</strong> ${selectedTime}</p>
        </div>
      `,
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm Booking'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Booking Confirmed!',
          'Your appointment has been scheduled successfully.',
          'success'
        );
      }
    });
  };

  return (
    <>
      <DoctorInfo />
      <div className="flex flex-col md:flex-row p-6 bg-gray-100">
        <ServiceList 
          selectedServices={selectedServices} 
          handleServiceSelection={handleServiceSelection} 
        />
        <BookingSummary 
          selectedServices={selectedServices}
          totalPrice={totalPrice}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          handleContinue={handleContinue}
        />
      </div>
      <AvailableSlots 
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        handleDateSelection={handleDateSelection}
        handleTimeSelection={handleTimeSelection}
      />
      <Reviews />
    </>
  );
}

export default Details;