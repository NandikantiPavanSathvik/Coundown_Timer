

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, AlertCircle } from 'lucide-react';

const TimerPage = ({ onAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);

  const handleSave = (e) => {
    e.preventDefault(); // Prevents page reload

    if (!name.trim()) {
      alert("Please enter an event name");
      return;
    }

    // Convert all strings to Numbers and calculate total seconds
    const totalSeconds = 
      (Number(days) * 86400) + 
      (Number(hours) * 3600) + 
      (Number(mins) * 60);

    if (totalSeconds <= 0) {
      alert("Please set a time greater than 0");
      return;
    }

    // Call the parent function
    onAdd({
      name: name,
      seconds: totalSeconds
    });

    // Redirect to home
    navigate('/');
  };

  return (
    <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-32px shadow-2xl">
      <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
        <Save className="text-blue-600" /> New Event
      </h2>
      
      <form onSubmit={handleSave} className="space-y-5">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Event Name</label>
          <input 
            required
            type="text"
            placeholder="e.g. Vacation"
            className="w-full p-4 rounded-xl bg-slate-50 border-none outline-blue-500 font-bold"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { l: 'Days', v: days, s: setDays },
            { l: 'Hrs', v: hours, s: setHours },
            { l: 'Mins', v: mins, s: setMins }
          ].map(input => (
            <div key={input.l}>
              <label className="text-[10px] font-bold text-slate-400 uppercase block text-center mb-1">{input.l}</label>
              <input 
                type="number"
                min="0"
                className="w-full p-3 rounded-xl bg-slate-50 border-none outline-blue-500 font-bold text-center"
                value={input.v}
                onChange={e => input.s(e.target.value)}
              />
            </div>
          ))}
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default TimerPage;