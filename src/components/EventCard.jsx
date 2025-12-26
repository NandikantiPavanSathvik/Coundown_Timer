import { useCountdown } from '../hooks/useCountdown';
import { Trash2 } from 'lucide-react';

const EventCard = ({ event, onDelete }) => {
  const { days, hours, minutes, seconds } = useCountdown(event.seconds);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-slate-50 rounded-32px border border-slate-100 hover:shadow-lg transition-all gap-6">
      <div className="text-center sm:text-left">
        <h3 className="font-black text-xl text-slate-800">{event.name}</h3>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Countdown</p>
      </div>

      <div className="flex gap-2">
        {[
          { v: days, l: 'D' },
          { v: hours, l: 'H' },
          { v: minutes, l: 'M' },
          { v: seconds, l: 'S' }
        ].map((unit, i) => (
          <div key={i} className="flex flex-col items-center bg-white px-3 py-2 rounded-xl border border-slate-200 min-w-50px">
            <span className="text-lg font-mono font-bold text-blue-600">{unit.v.toString().padStart(2, '0')}</span>
            <span className="text-[8px] font-black text-slate-300">{unit.l}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={() => onDelete(event.id)}
        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default EventCard;