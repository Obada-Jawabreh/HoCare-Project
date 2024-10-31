import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Clock, ChevronDown, Home, Shield, CreditCard, Star } from 'lucide-react';

const AboutPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const stats = [
    { icon: Users, value: '500+', label: 'Certified Providers' },
    { icon: Home, value: '5000+', label: 'Home Visits' },
    { icon: Star, value: '4.8', label: 'Average Rating' },
    { icon: Heart, value: '98%', label: 'Patient Satisfaction' },
  ];

  const milestones = [
    { year: '2022', event: 'HoCare launched with a mission to revolutionize home healthcare' },
    { year: '2023', event: 'Expanded services to include both physiotherapy and nursing care' },
    { year: '2023', event: 'Implemented secure payment system and provider verification' },
    { year: '2024', event: 'Reached milestone of 500+ certified healthcare providers' },
    { year: '2024', event: 'Launched mobile app for easier service booking' },
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-prim-dark"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center">
          {/* <img src="/api/placeholder/1920/1080" alt="Healthcare professionals" className="w-full h-full object-cover" /> */}
        </div>
        <div className="absolute inset-0 bg-prim-dark opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-center"
          >
            About HoCare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-center max-w-2xl px-4"
          >
            Transforming healthcare delivery through professional home services
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-12 h-12 text-white animate-bounce" />
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="bg-prime-white rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-prim-button mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700">
                At HoCare, we're dedicated to making professional healthcare accessible to everyone through our innovative platform connecting certified providers with patients in need of home-based care services.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-prime-white rounded-xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-prim-button mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700">
                We envision a future where quality healthcare is available at your doorstep, powered by technology and delivered by verified professionals who are passionate about patient care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-prim-button py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Impact
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-white opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-prime-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-prim-button text-center mb-12"
          >
            How HoCare Works
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="p-6 bg-prim-dark bg-opacity-5 rounded-xl text-center">
              <Shield className="w-12 h-12 text-prim-button mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Provider Verification</h3>
              <p className="text-gray-600">Thorough verification process for all healthcare providers</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-prim-dark bg-opacity-5 rounded-xl text-center">
              <Home className="w-12 h-12 text-prim-button mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Home Services</h3>
              <p className="text-gray-600">Professional healthcare services delivered to your home</p>
            </motion.div>
            <motion.div variants={itemVariants} className="p-6 bg-prim-dark bg-opacity-5 rounded-xl text-center">
              <CreditCard className="w-12 h-12 text-prim-button mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Safe and transparent payment processing</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-prim-dark">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Our Journey
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center bg-prime-white rounded-xl p-6"
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="text-2xl font-bold text-prim-button">{milestone.year}</div>
                </div>
                <div className="md:w-3/4 md:pl-8 border-l-4 border-prim-button">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-prim-button">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Join Our Healthcare Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white opacity-90 mb-8"
          >
            Whether you're a healthcare provider or someone seeking care, become part of our growing community.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-prim-button px-8 py-3 rounded-xl text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;