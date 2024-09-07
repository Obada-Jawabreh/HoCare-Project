import Phero from "./../assets/images/Phero.png";
import Card from "../Components/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";
import SearchBar from "../Components/SearchBar";
import Sidebar from "../Components/Sidebar";
function Physiotherapy() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalCards = 100; // إجمالي عدد البطاقات
  const handlePageChange = (page) => {
    setCurrentPage(page);
};
    // -----------------------------
    
    const handleSearch = (searchTerm) => {
      console.log('Searching for:', searchTerm);
      // قم بتنفيذ منطق البحث هنا
    };
  return (
    <>
      {/* heroSection */}
      
      <div className="pt-24 relative h-auto md:h-fit bg-gradient-to-r from-prim-button to-hover-button flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-8 md:w-1/2 text-white flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
            THE RIGHT <br />
            PHYSIOTHERAPY
          </h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            We provide one-on-one physiotherapy treatment
            <br /> sessions with the purpose to restore, improve,
            <br /> and maximize our patients’ range of motion,
            <br /> physical strength, function, and overall wellbeing.
          </p>
          <div className="bg-[#74C0EE] p-4 rounded-lg shadow-md text-black flex items-center space-x-2">
            <input
              type="date"
              className="p-2 border rounded bg-white text-black w-1/3"
              placeholder="Select Date"
            />
            <input
              type="time"
              className="p-2 border rounded bg-white text-black w-1/3"
              placeholder="Select Time"
            />
            <input
              type="text"
              className="p-2 border rounded bg-white text-black w-1/3"
              placeholder="Location"
            />
            <button className="p-2 bg-prim-button hover:bg-hover-button text-white rounded">
              Search
            </button>
          </div>
        </div>

        <img
          src={Phero}
          alt=""
          className="absolute inset-y-0 right-16 w-fit h-full object-cover opacity-75"
        />
      </div>
      {/* doctor */}
      <div className="p-4">
        <p className="text-lg font-bold m-4">Qualified Doctor</p>
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <Link to="/Details">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Link>
      </div>
      {/* Pagination */}
      <div className="m-6">
        {/* هنا يمكنك إضافة البطاقات بناءً على الصفحة الحالية */}
        <Pagination
          totalCards={totalCards}
          cardsPerPage={12}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      {/* hero */}
      <div className="bg-prim-dark flex flex-col items-center justify-center gap-8 text-center p-8">
        <h2 className="text-3xl font-bold text-black">
          Request your appointment <br />
          today
        </h2>
        <p className="text-lg text-black">
          Ready to prioritize your health? Schedule <br />
          an appointment with one of our <br />
          experienced healthcare professionals <br />
          today
        </p>
        <button
          type="button"
          className="text-white bg-prim-button hover:bg-hover-button focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-6 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
        >
          Schedule an appointment
        </button>
      </div>
    </>
  );
}
export default Physiotherapy;
