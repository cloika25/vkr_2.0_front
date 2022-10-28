import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/Flex';
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
    return () => {
      eventStore.clearStore();
    };
  }, []);

  return (
    <Container
      direction="col"
      flex="1"
    >
      <h1>{eventStore.viewModel.fullName}</h1>
      <div>
        <span>{`start: ${eventStore.viewModel.dateStartFormatted}`}</span>
        <br />
        <span>{`end: ${eventStore.viewModel.dateEndFormatted}`}</span>
      </div>
    </Container>
  );
};
export default observer(Event);
