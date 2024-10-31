import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import Card from "../../Components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProviders } from "../../Redux/providers/providerThunk";

const SpecialistsSlider = () => {
  const dispatch = useDispatch();
  const { providers, loading, error } = useSelector((state) => state.providers);
  const controls = useAnimation();
  const cardWidth = 300; // تعديل هذه القيمة حسب حجم البطاقة الخاصة بك

  useEffect(() => {
    dispatch(fetchProviders());
  }, [dispatch]);

  // Automatic sliding animation
  useEffect(() => {
    if (providers?.length) {
      const startSlideAnimation = async () => {
        await controls.start({
          x: [0, -cardWidth * providers.length],
          transition: {
            duration: providers.length * 5, // adjust speed here
            ease: "linear",
            repeat: Infinity,
          },
        });
      };
      startSlideAnimation();
    }
  }, [providers, controls, cardWidth]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-prim-button border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Error loading providers: {error}
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-prime-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-prim-button mb-12">
        Providers
        </h2>

        <div className="relative">
          <motion.div
            className="flex space-x-6"
            animate={controls}
            style={{ width: `${cardWidth * (providers?.length * 2)}px` }}
          >
            {/* Original providers */}
            <div className="flex space-x-6">
              {providers?.map((provider) => (
                <Link
                  key={provider.id}
                  to={`/Details/${provider.id}`}
                  className="flex-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card provider={provider} />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Duplicated providers for seamless loop */}
            <div className="flex space-x-6">
              {providers?.map((provider) => (
                <Link
                  key={`duplicate-${provider.id}`}
                  to={`/Details/${provider.id}`}
                  className="flex-none"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card provider={provider} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Optional: Navigation controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => controls.stop()}
            className="px-4 py-2 bg-prim-button text-white rounded-lg"
          >
            Pause
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              controls.start({
                x: [0, -cardWidth * providers.length],
                transition: {
                  duration: providers.length * 5,
                  ease: "linear",
                  repeat: Infinity,
                },
              });
            }}
            className="px-4 py-2 bg-prim-button text-white rounded-lg"
          >
            Play
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SpecialistsSlider;