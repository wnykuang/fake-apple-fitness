import React from 'react';

function WorkoutDetail({ label, value, unit, color }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-400">{label}</span>
      <span className={`text-lg ${color}`}>
        {value}
        <span className="text-xs ml-1">{unit}</span>
      </span>
    </div>
  );
}

export default WorkoutDetail;
