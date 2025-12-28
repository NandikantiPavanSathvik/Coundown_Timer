import { useCountdown } from '../hooks/useCountdown';
import { Trash2, BellOff, BellRing } from 'lucide-react';

const EventCard = ({ event, onDelete }) => {
  const { days, hours, minutes, seconds, isEnded } = useCountdown(event.targetDate);

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between p-6 rounded-[32px] border transition-all gap-6 ${isEnded ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'}`}>
      <div className="text-center sm:text-left">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <h3 className={`font-black text-xl ${isEnded ? 'text-red-600' : 'text-slate-800'}`}>{event.name}</h3>
          {isEnded ? <BellRing size={18} className="text-red-500 animate-bounce" /> : <BellOff size={18} className="text-slate-300" />}
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{isEnded ? 'Time Expired' : 'Active Countdown'}</p>
      </div>

      <div className="flex gap-2">
        {[
          { v: days, l: 'D' },
          { v: hours, l: 'H' },
          { v: minutes, l: 'M' },
          { v: seconds, l: 'S' }
        ].map((unit, i) => (
          <div key={i} className={`flex flex-col items-center px-3 py-2 rounded-xl border min-w-50px ${isEnded ? 'bg-white border-red-200' : 'bg-white border-slate-200'}`}>
            <span className={`text-lg font-mono font-bold ${isEnded ? 'text-red-400' : 'text-blue-600'}`}>{unit.v.toString().padStart(2, '0')}</span>
            <span className="text-[8px] font-black text-slate-300">{unit.l}</span>
          </div>
        ))}
      </div>

      <button onClick={() => onDelete(event.id)} className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all">
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default EventCard;