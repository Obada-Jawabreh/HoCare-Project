import React from "react";

const ServiceList = ({
  selectedServices,
  handleServiceSelection,
  services,
}) => {


  return (
    <div className="flex flex-col gap-6 w-full md:w-2/3 bg-[#EEF6F9] p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        Services
      </h2>
      {services && services.length > 0 ? (
        <div className="flex flex-col gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center"
            >
              <div className="text-left">
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-lg font-bold">{service.price}JD</p>
              </div>
              <button
                className={`px-4 py-2 ${
                  selectedServices.some((s) => s.name === service.name)
                    ? "bg-green-500"
                    : "bg-prim-button"
                } text-white rounded hover:opacity-80`}
                onClick={() => handleServiceSelection(service)}
              >
                {selectedServices.some((s) => s.name === service.name)
                  ? "Selected"
                  : "Select"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          Currently, there are no services available for this therapist.
        </div>
      )}
    </div>
  );
};

export default ServiceList;
