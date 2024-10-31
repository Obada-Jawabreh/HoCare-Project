import Phero from "./../../assets/images/Phero.png";
import Card from "../../Components/Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import SearchBar from "../../Components/SearchBar";
import Sidebar from "../../Components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProviders } from "../../Redux/providers/providerThunk";
const Catalog = () => {
  const dispatch = useDispatch();
  const { providers, loading, error } = useSelector((state) => state.providers);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(providers)) {
      let filtered = [...providers];

      // Apply profession filter
      if (selectedProfession !== 'All') {
        filtered = filtered.filter(
          provider => provider.profession === selectedProfession
        );
      }

      // Apply search filter
      if (searchTerm) {
        filtered = filtered.filter(
          provider =>
            provider.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.lastName?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredProviders(filtered);
      setCurrentPage(1);
    }
  }, [providers, selectedProfession, searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (profession) => {
    setSelectedProfession(profession);
  };

  const cardsPerPage = 12;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredProviders.slice(indexOfFirstCard, indexOfLastCard);
  const totalCards = filteredProviders.length;

  return (
    <>
      {/* Hero Section */}
      <div className="pt-24 relative h-auto md:h-fit bg-gradient-to-r from-prim-button to-hover-button flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 p-8 md:w-1/2 text-white flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">
            THE RIGHT <br /> PHYSIOTHERAPY
          </h2>
          <p className="mb-4 text-sm md:text-base lg:text-lg">
            We provide one-on-one physiotherapy treatment
            <br /> sessions with the purpose to restore, improve,
            <br /> and maximize our patients' range of motion,
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

      {/* Providers Section */}
      <div className="p-4">
        <p className="text-lg font-bold m-4">Qualified Doctor</p>
        <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-4">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCards.map((provider) => (
              <Card key={provider.user_id} provider={provider} />
            ))}
          </div>
        )}

        {!loading && !error && filteredProviders.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No providers found matching your criteria
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="m-6">
        <Pagination
          totalCards={totalCards}
          cardsPerPage={cardsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Call to Action */}
      <div className="bg-prim-dark flex flex-col items-center justify-center gap-8 text-center p-8">
        <h2 className="text-3xl font-bold text-black">
          Request your appointment <br /> today
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
};

export default Catalog;