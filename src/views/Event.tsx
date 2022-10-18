import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStores } from '../hooks/useStores';

interface EventProps {
}

const Event: React.FC<EventProps> = () => {
  const params = useParams();
  const { eventStore } = useStores();

  useEffect(() => {
    if (params.id) {
      eventStore.fetch(params.id);
    }
    return eventStore.clearStore();
  }, []);

  return (<div>{JSON.stringify(eventStore.viewModel.getRawData())}</div>);
};
export default Event;
