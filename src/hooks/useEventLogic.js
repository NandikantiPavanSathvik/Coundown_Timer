

// import { useState } from 'react';

// export const useEventLogic = () => {
//   const [events, setEvents] = useState([
//     { id: 1, name: "Default Timer", seconds: 3600 }
//   ]);

//   const addEvent = (newEvent) => {
//     // We use the functional update (prev) => ... to ensure we have the latest list
//     setEvents((prev) => [...prev, { ...newEvent, id: Date.now() }]);
//   };

//   const deleteEvent = (id) => {
//     setEvents((prev) => prev.filter(event => event.id !== id));
//   };

//   return { events, addEvent, deleteEvent };
// };


import { useState } from 'react';

export const useEventLogic = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    // Calculate the exact moment in the future this timer ends
    const targetDate = Date.now() + (newEvent.seconds * 1000);
    
    setEvents((prev) => [...prev, { 
      id: Date.now(), 
      name: newEvent.name, 
      targetDate: targetDate 
    }]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter(event => event.id !== id));
  };

  return { events, addEvent, deleteEvent };
};