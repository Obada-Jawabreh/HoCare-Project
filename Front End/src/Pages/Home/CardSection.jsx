import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import get from "../../Components/Hooks/customHooks/get";

const ProviderSection = () => {
  const { data: physiotherapy } = get("provider", "physiotherapy");
  const { data: nursing } = get("provider", "nursing");

  const SliderSection = ({ title, providers }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slideLeft = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
    };

    const slideRight = () => {
      setCurrentIndex((prev) => 
        prev < providers.length - 3 ? prev + 1 : prev
      );
    };

    return (
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <div className="flex gap-4">
            <button
              onClick={slideLeft}
              className="p-2 rounded-full bg-prim-button text-white hover:bg-hover-button transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={slideRight}
              className="p-2 rounded-full bg-prim-button text-white hover:bg-hover-button transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * 320}px` }}
            transition={{ duration: 0.5 }}
          >
            {providers?.map((provider) => (
              <div key={provider.user_id} className="flex-shrink-0 w-[300px]">
                <Card provider={provider} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Healthcare Professionals
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our experienced team of healthcare providers who are ready to assist you with personalized care and professional service.
          </p>
        </div>

        <SliderSection 
          title="Physical Therapists" 
          providers={physiotherapy} 
        />
        
        <SliderSection 
          title="Home Nursing Services" 
          providers={nursing} 
        />
      </div>
    </section>
  );
};

export default ProviderSection;