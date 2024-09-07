// ServiceList.js
import React from 'react';

const ServiceList = ({ services, selectedServices, onServiceSelection }) => {
  return (
    <div className="flex flex-col gap-6">
      {services.map((service) => (
        <div key={service.name} className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-lg font-bold">{service.price}JD</p>
          </div>
          <button 
            className={`px-4 py-2 ${selectedServices.some(s => s.name === service.name) ? 'bg-green-500' : 'bg-blue-500'} text-white rounded hover:opacity-80`}
            onClick={() => onServiceSelection(service)}
          >
            {selectedServices.some(s => s.name === service.name) ? 'Selected' : 'Select'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
