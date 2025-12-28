import React from 'react';

const ManualInput = ({ values, onChange }) => {
  return (
    <div className="grid grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
      {['days', 'hrs', 'mins'].map((unit) => (
        <div key={unit}>
          <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block text-center">
            {unit}
          </label>
          <input
            type="number"
            min="0"
            value={values[unit]}
            onChange={(e) => onChange(unit, e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 outline-none font-bold text-center"
          />
        </div>
      ))}
    </div>
  );
};

export default ManualInput;