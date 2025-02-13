import React from "react";
import { Home } from "lucide-react";
import ThreeBG from "./components/ThreeBG";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:min-h-screen lg:items-center">
            {/* 3D Background Section - Full screen on mobile/tablet */}
            <div className="w-full h-screen lg:w-1/2 lg:h-screen lg:order-2">
              <ThreeBG />
            </div>
            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-16 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-orange-400">
                  HomeWise Vision
                </h1>
              </div>
              <h2 className="text-xl lg:text-2xl mb-6 text-gray-300">
                Transform your space with our cutting-edge AR visualization
                technology. See your dream home come to life before making any
                changes.
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Experience the future of home design with our immersive AR
                platform. Visualize furniture, colors, and layouts in real-time,
                making informed decisions about your space with confidence.
              </p>
              <button className="bg-orange-400 hover:bg-orange-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
