import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Physiotherapy from "../../assets/images/Physiotherapy.jpg";
import nursing from "../../assets/images/nursing.jpg";

function CardSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Choose Your Health Service</h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          <ServiceCard
            title="Physiotherapy"
            image={Physiotherapy}
            description="Specialized physiotherapy services to improve movement and physical performance"
            link="/Physiotherapy"
          />
          <ServiceCard
            title="Home Nursing"
            image={nursing}
            description="High-quality nursing care in the comfort of your home"
            link="/HomeNursing"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, image, description, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[calc(50%-0.75rem)] max-w-md"
    >
      <Link to={link} className="block h-full">
        <div className="relative pb-[56.25%]">
          <img src={image} alt={title} className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
          <button className="bg-prim-button text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-hover-button transition duration-300">
            Learn More
          </button>
        </div>
      </Link>
    </motion.div>
  );
}

export default CardSection;