import React from "react";
import "./App.css"; // Tailwind CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Chevron-style arrow

function App() {
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen p-6">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-lg mb-4">
        <div>
          <FontAwesomeIcon icon={faChevronLeft} className="text-green-400 mr-2" />
          <button className="text-green-400">Sessions</button>
        </div>
        <div className="text-center">
          <h2 className="text-lg">Thu, Sep 19</h2>
          <p className="text-sm">Indoor Run</p>
          <p className="text-yellow-400 text-xs">Goal: 50MIN</p>
        </div>
        <div>
          <button className="text-green-400">Share</button>
        </div>
      </header>

      {/* Workout Details */}
      <section className="bg-gray-900 rounded-lg p-4 w-full max-w-lg">
        <h3 className="text-lg mb-4">Workout Details</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-400">Workout Time</span>
            <span className="text-yellow-400 text-lg">0:45:19</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Distance</span>
            <span className="text-blue-400 text-lg">7.07KM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Active Calories</span>
            <span className="text-red-400 text-lg">562CAL</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Total Calories</span>
            <span className="text-red-400 text-lg">651CAL</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Avg. Cadence</span>
            <span className="text-blue-400 text-lg">149SPM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Avg. Pace</span>
            <span className="text-yellow-400 text-lg">6'24"/KM</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">Avg. Heart Rate</span>
            <span className="text-red-400 text-lg">140BPM</span>
          </div>
        </div>
      </section>

      {/* Effort Section */}
      <section className="bg-gray-900 rounded-lg p-4 w-full max-w-lg mt-4">
        <h3 className="text-lg mb-4">Effort</h3>
        <div className="flex justify-between items-center">
          <span className="text-2xl">5</span>
          <span className="text-blue-400">Moderate</span>
        </div>
      </section>

      {/* Splits Section */}
      <section className="bg-gray-900 rounded-lg p-4 w-full max-w-lg mt-4">
        <h3 className="text-lg mb-4">Splits</h3>
        <div className="grid grid-cols-3 text-center text-sm text-gray-400">
          <span>Time</span>
          <span>Pace</span>
          <span>Heart Rate</span>
        </div>
        <div className="grid grid-cols-3 text-center text-sm text-white mt-2">
          <span>06:25</span>
          <span>6'25"</span>
          <span className="text-red-400">138BPM</span>
        </div>
        {/* Add more rows as needed */}
      </section>
    </div>
  );
}

export default App;
