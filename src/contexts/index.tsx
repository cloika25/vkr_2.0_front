import { createContext } from 'react';
import { EventsStore } from '../stores/Events/EventsStore';
import { EventStore } from '../stores/Event/EventStore';

export const storeContext = createContext({
  eventsStore: new EventsStore(),
  eventStore: new EventStore(),
});
