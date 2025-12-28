
import { useState } from 'react';

export const useEventLogic = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    // newEvent already contains the 'targetDate' (timestamp) from TimerPage
    setEvents((prev) => [...prev, { 
      id: Date.now(), 
      name: newEvent.name, 
      targetDate: newEvent.targetDate 
    }]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter(event => event.id !== id));
  };

  return { events, addEvent, deleteEvent };
};