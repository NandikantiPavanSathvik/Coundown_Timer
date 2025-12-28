import React from 'react';
import { Calendar } from 'lucide-react';

const DateInput = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block ml-1">
        Target Date & Time
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <Calendar size={18} />
        </div>
        <input
          type="datetime-local"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 p-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-500 outline-none font-bold text-slate-700"
          min={new Date().toISOString().slice(0, 16)} // Prevents picking past dates
        />
      </div>
    </div>
  );
};

export default DateInput;