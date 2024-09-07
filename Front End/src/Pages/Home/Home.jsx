// import React from "react";
// import heroSection from '../../assets/images/heroSection.png'
// // import heroSectionb from "../assets/images/herosectionback.png";
// import nursing from "../../assets/images/nursing.jpg";
// import Physiotherapy from "../../assets/images/Physiotherapy.jpg";
// import section1 from "../../assets/images/section1.jpg";
// import section2 from "../../assets/images/section2.jpg";
// import section3 from "../../assets/images/section3.jpg";
// import Card from "../../Components/Card";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { HiArrowDown } from "react-icons/hi2";
// import Pagination from "../../Components/Pagination";
// function Home() {

//   const [showAnswer1, setShowAnswer1] = useState(false);
//   const [showAnswer2, setShowAnswer2] = useState(false);
//   const [showAnswer3, setShowAnswer3] = useState(false);
//   return (
//     <>
//       {/* heroSection */}
//       <div
//         style={{ backgroundImage: `url(${heroSection})` }}
//         className="relative bg-[url('/assets/images/heroSection.png')] bg-cover bg-center h-screen"
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-[#134155] to-[#44898F] opacity-75"></div>
//         <section className="relative flex flex-col items-center justify-center h-full text-prime-white text-center">
//           <h1 className="text-4xl font-bold mb-4">
//             find your health specialists
//           </h1>
//           <p className="text-lg mb-8 max-w-2xl text-prime-white">
//             Physiotherapy and home nursing services provided by the best
//             specialists, for integrated and regular health care
//           </p>
//           <div className="flex space-x-4">
//             <button className="bg-prime-white text-hover-button font-bold px-6 py-3 rounded-lg hover:bg-zinc-200">
//               schedule an appointment
//             </button>
//           </div>
//           <div className="mt-8">
//             <HiArrowDown />
//           </div>
//         </section>
//       </div>
//       {/* card section */}
//       <div className="flex gap-6 justify-evenly w-full flex-wrap mt-16">
//         <Link to="Physiotherapy">
//           <div className="flex flex-col items-center gap-3 p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
//             <p className="font-bold text-2xl text-gray-800">Physiotherapy</p>
//             <img
//               src={Physiotherapy}
//               alt="Physiotherapy"
//               className="w-fit h-96 rounded-lg transition-transform transform hover:rotate-1"
//             />
//           </div>
//         </Link>
//         <Link to="HomeNursing">
//           <div className="flex flex-col items-center gap-3 p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
//             <p className="font-bold text-2xl text-gray-800">Home nursing</p>
//             <img
//               src={nursing}
//               alt="Home Nursing"
//               className="w-fit h-96 rounded-lg transition-transform transform hover:rotate-1"
//             />
//           </div>
//         </Link>
//       </div>

//       {/* section */}
//       <div className="bg-prime-white flex flex-col h-5/6 mt-16">
//         <div className="flex flex-col lg:flex-row lg:gap-96 justify-around mt-16">
//           <p className="text-xl text-center lg:text-left">
//             Finding new ways to improve the <br />
//             health and well-being of people <br /> everywhere
//           </p>
//           <button className="bg-prim-button rounded-lg text-white w-32 h-12 hover:bg-hover-button mx-auto lg:mx-0 mt-4 lg:mt-0">
//             Read More
//           </button>
//         </div>
//         <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-8 lg:gap-16 justify-center mt-16">
//           <img src={section1} alt="" className="w-60 md:w-80 mx-auto rounded-lg" />
//           <img src={section2} alt="" className="w-60 md:w-80 mx-auto rounded-lg" />
//           <img src={section3} alt="" className="w-60 md:w-80 mx-auto rounded-lg" />
//         </div>
//       </div>
//       {/* Card */}
//       <Link to="/Details">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-24">
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//           <Card />
//         </div>
//       </Link>
   
//       {/* Questions */}
//       <div className="bg-prim-dark p-8 mt-16">
//         <div className="text-center mb-8">
//           <p className="text-3xl font-bold text-black">
//             Frequently Asked Questions
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <div className="w-full max-w-2xl">
//             <div className="flex justify-between items-center mt-10">
//               <p className="text-black text-lg">What services do we provide?</p>
//               <p
//                 className="text-black font-bold text-2xl cursor-pointer"
//                 onClick={() => setShowAnswer1(!showAnswer1)}
//               >
//                 {showAnswer1 ? "-" : "+"}
//               </p>
//             </div>
//             {showAnswer1 && (
//               <div className="mt-4 text-black">
//                 We provide a variety of services including physical therapy,
//                 occupational therapy, and home nursing.
//               </div>
//             )}
//             <hr className="my-4 border-black" />

//             <div className="flex justify-between items-center">
//               <p className="text-black text-lg">
//                 How can I make an appointment?
//               </p>
//               <p
//                 className="text-black font-bold text-2xl cursor-pointer"
//                 onClick={() => setShowAnswer2(!showAnswer2)}
//               >
//                 {showAnswer2 ? "-" : "+"}
//               </p>
//             </div>
//             {showAnswer2 && (
//               <div className="mt-4 text-black">
//                 You can make an appointment by contacting us through our website
//                 or by calling our office.
//               </div>
//             )}
//             <hr className="my-4 border-black" />

//             <div className="flex justify-between items-center">
//               <p className="text-black text-lg">
//                 Do you accept health insurance?
//               </p>
//               <p
//                 className="text-black font-bold text-2xl cursor-pointer"
//                 onClick={() => setShowAnswer3(!showAnswer3)}
//               >
//                 {showAnswer3 ? "-" : "+"}
//               </p>
//             </div>
//             {showAnswer3 && (
//               <div className="mt-4 text-black">
//                 Yes, we accept various health insurance plans. Please contact us
//                 for more details.
//               </div>
//             )}
//             <hr className="my-4 border-black" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;



import React from "react";
import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import HealthServicesSection from "./HealthServicesSection";
import SpecialistsSection from "./SpecialistsSection";
import FAQSection from "./FAQSection";

function Home() {
  return (
    <>
      <HeroSection />
      <CardSection />
      <HealthServicesSection />
      <SpecialistsSection />
      <FAQSection />
    </>
  );
}

export default Home;