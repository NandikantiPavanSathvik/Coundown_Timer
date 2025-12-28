


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Save, ChevronLeft } from 'lucide-react';

// const TimerPage = ({ onAdd }) => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [mins, setMins] = useState(0);

//   const handleSave = (e) => {
//     e.preventDefault();
//     if (!name.trim()) return;

//     const totalSeconds = (Number(days) * 86400) + (Number(hours) * 3600) + (Number(mins) * 60);
    
//     onAdd({ name, seconds: totalSeconds });
//     navigate('/');
//   };

//   return (
//     <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-[40px] shadow-2xl">
//       <button onClick={() => navigate('/')} className="mb-4 flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-tighter">
//         <ChevronLeft size={16}/> Back
//       </button>
//       <h2 className="text-2xl font-black mb-6">Create Event</h2>
//       <form onSubmit={handleSave} className="space-y-4">
//         <input placeholder="Event Name" className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-blue-500 font-bold" value={name} onChange={e => setName(e.target.value)} />
//         <div className="grid grid-cols-3 gap-3">
//           {['Days', 'Hrs', 'Mins'].map((l, i) => (
//             <div key={l}>
//               <label className="text-[10px] font-bold text-slate-400 block text-center mb-1">{l}</label>
//               <input type="number" className="w-full p-3 rounded-xl bg-slate-50 border-none outline-blue-500 font-bold text-center" onChange={e => [setDays, setHours, setMins][i](e.target.value)} />
//             </div>
//           ))}
//         </div>
//         <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all">Add Event</button>
//       </form>
//     </div>
//   );
// };

// export default TimerPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Save, ChevronLeft } from 'lucide-react';
// import DateInput from '../components/DateInput';

// const TimerPage = ({ onAdd }) => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [targetDateTime, setTargetDateTime] = useState('');

//   const handleSave = (e) => {
//     e.preventDefault();
//     if (!name.trim() || !targetDateTime) return;

//     // Convert the selected calendar string to a timestamp
//     const targetTimestamp = new Date(targetDateTime).getTime();
    
//     // Check if the date is in the future
//     if (targetTimestamp <= Date.now()) {
//       alert("Please select a date and time in the future.");
//       return;
//     }

//     onAdd({ 
//       name, 
//       targetDate: targetTimestamp 
//     });
    
//     navigate('/');
//   };

//   return (
//     <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-[40px] shadow-2xl">
//       <button onClick={() => navigate('/')} className="mb-4 flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-tighter transition-colors">
//         <ChevronLeft size={16}/> Back
//       </button>
      
//       <h2 className="text-2xl font-black mb-6 text-slate-900">New Event</h2>
      
//       <form onSubmit={handleSave} className="space-y-6">
//         <div>
//           <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block ml-1">Event Name</label>
//           <input 
//             placeholder="e.g. New Year Party" 
//             className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-blue-500 font-bold" 
//             value={name} 
//             onChange={e => setName(e.target.value)} 
//           />
//         </div>

//         <DateInput value={targetDateTime} onChange={setTargetDateTime} />

//         <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-[0.98]">
//           Add Event
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TimerPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, ChevronLeft, Calendar, Clock } from 'lucide-react';
import DateInput from '../components/DateInput';
import ManualInput from '../components/ManualInput';

const TimerPage = ({ onAdd }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mode, setMode] = useState('calendar'); // 'calendar' or 'manual'

  // States for both modes
  const [targetDateTime, setTargetDateTime] = useState('');
  const [manualValues, setManualValues] = useState({ days: 0, hrs: 0, mins: 60 });

  const handleManualChange = (unit, value) => {
    setManualValues(prev => ({ ...prev, [unit]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter an event name");

    let targetTimestamp;

    if (mode === 'calendar') {
      if (!targetDateTime) return alert("Please select a date");
      targetTimestamp = new Date(targetDateTime).getTime();
    } else {
      const totalSeconds = 
        (Number(manualValues.days) * 86400) + 
        (Number(manualValues.hrs) * 3600) + 
        (Number(manualValues.mins) * 60);
      targetTimestamp = Date.now() + (totalSeconds * 1000);
    }

    if (targetTimestamp <= Date.now()) {
      alert("The target time must be in the future!");
      return;
    }

    onAdd({ name, targetDate: targetTimestamp });
    navigate('/');
  };

  return (
    <div className="w-full max-w-md p-8 bg-white border border-slate-100 rounded-[40px] shadow-2xl">
      <button onClick={() => navigate('/')} className="mb-4 flex items-center text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-tighter transition-colors">
        <ChevronLeft size={16}/> Back
      </button>

      <h2 className="text-2xl font-black mb-6 text-slate-900">Create Event</h2>

      {/* Mode Switcher */}
      <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
        <button
          onClick={() => setMode('calendar')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-bold transition-all ${mode === 'calendar' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
        >
          <Calendar size={16} /> Calendar
        </button>
        <button
          onClick={() => setMode('manual')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-bold transition-all ${mode === 'manual' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
        >
          <Clock size={16} /> Duration
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block ml-1">Event Name</label>
          <input
            placeholder="e.g. Flight Departure"
            className="w-full p-4 rounded-2xl bg-slate-50 border-none outline-blue-500 font-bold"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Conditional Rendering based on Mode */}
        {mode === 'calendar' ? (
          <DateInput value={targetDateTime} onChange={setTargetDateTime} />
        ) : (
          <ManualInput values={manualValues} onChange={handleManualChange} />
        )}

        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all active:scale-[0.98]">
          Create Countdown
        </button>
      </form>
    </div>
  );
};

export default TimerPage;