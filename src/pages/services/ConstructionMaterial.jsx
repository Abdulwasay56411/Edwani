import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "./../../components/TransparentNavbar";

const ConstructionMaterial = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="relative">
        {/* Background with Navbar inside */}
        <div
          className="relative w-full bg-cover bg-center h-[500px] md:min-h-screen flex flex-col"
          style={{
            backgroundImage: `url(/bgservices.jpg)`,
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#2387C0]/60"></div>

          {/* Navbar */}
          <div className="w-full relative z-1000">
            <TransparentNavbar />
          </div>

          {/* Animated Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center items-center relative z-10"
          >
            <div
              className="flex flex-col justify-center items-center text-center 
                        bg-white/80 backdrop-blur-lg 
                        rounded-md md:rounded-xl 
                        shadow-[0px_2.9px_3.3px_0px_rgba(0,0,0,0.06),0px_7.2px_9.4px_0px_rgba(0,0,0,0.05)] 
                        w-64 h-24 md:w-[500px] md:h-[180px] lg:w-[732px] lg:h-60 p-4 md:p-8 lg:p-12
                        -mt-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-[#2387C0] font-extrabold text-lg md:text-3xl lg:text-[48px] leading-tight"
              >
                Construction Material Supply
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-stone-900 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-snug mt-2 break-words"
              >
                Edwani Contracting
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" bg-gray-50 ">
        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Premium Construction Materials
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We supply high-quality construction materials from trusted
                  manufacturers worldwide. Our comprehensive inventory ensures
                  you get the right materials for your projects, delivered on
                  time and within budget.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Quality-certified construction materials
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Competitive pricing and bulk discounts
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Timely delivery and logistics support
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Technical support and material selection guidance
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                  Material Categories
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Structural Materials
                    </h4>
                    <p className="text-gray-600">
                      Steel, concrete, reinforcement bars
                    </p>
                  </div>
                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Finishing Materials
                    </h4>
                    <p className="text-gray-600">
                      Tiles, paints, flooring materials
                    </p>
                  </div>
                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      MEP Materials
                    </h4>
                    <p className="text-gray-600">
                      Pipes, cables, fixtures, fittings
                    </p>
                  </div>
                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Specialty Materials
                    </h4>
                    <p className="text-gray-600">
                      Waterproofing, insulation, adhesives
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionMaterial;
