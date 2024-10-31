import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import AddData from "../../Components/Hooks/customHooks/postData";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const {
    addData,
    loading: addDataLoading,
    error: addDataError,
    success,
  } = AddData("contact", "add");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addData(formData);

      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: response.message || "Contact message added successfully.",
          confirmButtonColor: "#3085d6",
        });
        setIsSubmitted(true);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: response.message || "Failed to send message. Please try again.",
          confirmButtonColor: "#d33",
        });
        if (response.message == "You must be logged in") {
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text:
          error.response?.data?.message ||
          "An unexpected error occurred. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-prim-dark"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-prim-button opacity-90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-2xl px-4"
          >
            We're here to help and answer any questions you might have
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-prime-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-prim-button text-center mb-8">
                Send Us a Message
              </h2>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-prim-button focus:ring-2 focus:ring-prim-button/20 transition duration-200"
                        required
                        placeholder="Enter your name"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        className="block text-gray-700 mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-prim-button focus:ring-2 focus:ring-prim-button/20 transition duration-200"
                        required
                        placeholder="Enter your email"
                      />
                    </motion.div>
                  </div>
                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-prim-button focus:ring-2 focus:ring-prim-button/20 transition duration-200"
                      required
                      placeholder="Enter subject"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label
                      className="block text-gray-700 mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-prim-button focus:ring-2 focus:ring-prim-button/20 transition duration-200"
                      required
                      placeholder="Enter your message"
                    />
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="flex justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-prim-button text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-opacity-90 transition duration-300 flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                  </motion.div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
