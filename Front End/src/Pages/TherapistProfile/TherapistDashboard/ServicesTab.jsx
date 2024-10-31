import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const ServicesTab = ({ services, setServices }) => {
  const [newService, setNewService] = useState({ name: "", price: "", description: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddService = () => {
    if (newService.name && newService.price) {
      if (editingIndex !== null) {
        const updatedServices = [...services];
        updatedServices[editingIndex] = newService;
        setServices(updatedServices);
        setEditingIndex(null);
      } else {
        setServices([...services, newService]);
      }
      setNewService({ name: "", price: "", description: "" });
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewService(services[index]);
  };

  const handleDelete = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#EEF6F9] rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#46808B]">Add/Edit Service</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
              placeholder="Service Name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46808B]"
            />
            <input
              type="number"
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: e.target.value })}
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#46808B]"
            />
            <textarea
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              placeholder="Service Description"
              className="w-full p-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-[#46808B]"
            />
            <button
              onClick={handleAddService}
              className="w-full bg-[#46808B] hover:bg-[#5A9BAE] text-white py-2 px-4 rounded-md transition-colors duration-200"
            >
              {editingIndex !== null ? "Update Service" : "Add Service"}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF6F9] rounded-lg shadow-md">
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-[#46808B]">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-lg text-[#46808B]">{service.name}</p>
                    <p className="text-gray-600">${service.price}</p>
                    <p className="text-gray-600 mt-2">{service.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(index)} className="text-[#46808B] hover:text-[#5A9BAE]">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-600">
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

export default ServicesTab;