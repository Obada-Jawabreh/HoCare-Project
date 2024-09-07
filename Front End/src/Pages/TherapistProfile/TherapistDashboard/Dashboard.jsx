import React, { useState } from "react";
import {
  Calendar,
  Users,
  MessageSquare,
  Star,
  BarChart2,
  Package,
  Edit,
  Trash2,
} from "lucide-react";

const AppointmentTab = ({ appointments, setAppointments }) => {
  const [newAppointment, setNewAppointment] = useState({ day: "", time: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleAddAppointment = () => {
    if (newAppointment.day && newAppointment.time) {
      if (editingIndex !== null) {
        const updatedAppointments = [...appointments];
        updatedAppointments[editingIndex] = newAppointment;
        setAppointments(updatedAppointments);
        setEditingIndex(null);
      } else {
        setAppointments([...appointments, newAppointment]);
      }
      setNewAppointment({ day: "", time: "" });
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewAppointment(appointments[index]);
  };

  const handleDelete = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Add/Edit Appointment</h3>
      <div className="flex gap-2 mb-4">
        <select
          value={newAppointment.day}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, day: e.target.value })
          }
          className="border p-2 rounded"
        >
          <option value="">Select Day</option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <input
          type="time"
          value={newAppointment.time}
          onChange={(e) =>
            setNewAppointment({ ...newAppointment, time: e.target.value })
          }
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddAppointment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-2">Appointments</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appointments.map((app, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">{app.day}</p>
            <p>{app.time}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-500"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesTab = ({ services, setServices }) => {
  const [newService, setNewService] = useState({ name: "", price: "" });
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
      setNewService({ name: "", price: "" });
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
    <div>
      <h3 className="text-lg font-semibold mb-2">Add/Edit Service</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newService.name}
          onChange={(e) =>
            setNewService({ ...newService, name: e.target.value })
          }
          placeholder="Service Name"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={newService.price}
          onChange={(e) =>
            setNewService({ ...newService, price: e.target.value })
          }
          placeholder="Price"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-2">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <p className="font-semibold">{service.name}</p>
            <p>${service.price}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-blue-500"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientsTab = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Clients</h2>
    <p>Clients management interface goes here.</p>
  </div>
);

const ChatTab = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Chat</h2>
    <p>Chat interface goes here.</p>
  </div>
);

const ReviewsTab = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Reviews</h2>
    <p>Reviews management interface goes here.</p>
  </div>
);

const AnalyticsTab = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Analytics</h2>
    <p>Analytics dashboard goes here.</p>
  </div>
);

const TherapistDashboard = () => {
  const [activeTab, setActiveTab] = useState("appointments");
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);

  const tabComponents = {
    appointments: (
      <AppointmentTab
        appointments={appointments}
        setAppointments={setAppointments}
      />
    ),
    services: <ServicesTab services={services} setServices={setServices} />,
    clients: <ClientsTab />,
    chat: <ChatTab />,
    reviews: <ReviewsTab />,
    analytics: <AnalyticsTab />,
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Therapist Dashboard</h1>

      <div className="flex mb-6 bg-white rounded-lg shadow-md overflow-hidden">
        {Object.keys(tabComponents).map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-3 px-4 text-center ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        {tabComponents[activeTab]}
      </div>
    </div>
  );
};

export default TherapistDashboard;