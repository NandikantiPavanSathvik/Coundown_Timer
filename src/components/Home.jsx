
import EventCard from './EventCard';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = ({ events, onDelete }) => (
  <div className="w-full max-w-2xl space-y-6">
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-black tracking-tight text-slate-900">Live Timers</h1>
      <Link to="/timer" className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all">
        <Plus size={20} />
      </Link>
    </div>

    {events.length === 0 ? (
      <div className="py-20 text-center border-2 border-dashed border-slate-100 rounded-[40px]">
        <p className="text-slate-400 font-bold">No events yet.</p>
      </div>
    ) : (
      <div className="space-y-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onDelete={onDelete} />
        ))}
      </div>
    )}
  </div>
);

export default Home;