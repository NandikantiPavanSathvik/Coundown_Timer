

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEventLogic } from './hooks/useEventLogic';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import TimerPage from './pages/TimerPage';

function App() {
  const { events, addEvent, deleteEvent } = useEventLogic();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow flex flex-col items-center p-6">
          <Routes>
            <Route path="/" element={<Home events={events} onDelete={deleteEvent} />} />
            <Route path="/timer" element={<TimerPage onAdd={addEvent} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;