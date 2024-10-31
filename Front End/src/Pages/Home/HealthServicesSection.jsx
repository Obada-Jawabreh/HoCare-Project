import React from "react";
import section1 from "../../assets/images/section1.jpg";
import section2 from "../../assets/images/section2.jpg";
import section3 from "../../assets/images/section3.jpg";
import { useNavigate } from "react-router-dom";
function HealthServicesSection() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about"); 
  };
  return (
    <div className="bg-prime-white flex flex-col h-5/6 mt-16">
      <div className="flex flex-col lg:flex-row lg:gap-96 justify-around mt-16">
        <p className="text-xl text-center lg:text-left">
          Finding new ways to improve the <br />
          health and well-being of people <br /> everywhere
        </p>
        <button
          onClick={handleButtonClick}
          className="bg-prim-button rounded-lg text-white w-32 h-12 hover:bg-hover-button mx-auto lg:mx-0 mt-4 lg:mt-0"
        >
          Read More
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-8 lg:gap-16 justify-center mt-16">
        <img
          src={section1}
          alt=""
          className="w-60 md:w-80 mx-auto rounded-lg"
        />
        <img
          src={section2}
          alt=""
          className="w-60 md:w-80 mx-auto rounded-lg"
        />
        <img
          src={section3}
          alt=""
          className="w-60 md:w-80 mx-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default HealthServicesSection;
