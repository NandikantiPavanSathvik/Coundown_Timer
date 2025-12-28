

// import { useState } from 'react';

// export const useEventLogic = () => {
//   const [events, setEvents] = useState([]);

//   const addEvent = (newEvent) => {
//     // Calculate the exact moment in the future this timer ends
//     const targetDate = Date.now() + (newEvent.seconds * 1000);
    
//     setEvents((prev) => [...prev, { 
//       id: Date.now(), 
//       name: newEvent.name, 
//       targetDate: targetDate 
//     }]);
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