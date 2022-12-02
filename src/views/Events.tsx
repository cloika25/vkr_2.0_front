import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventShortCard from '../components/Event/EventShortCard';
import { Container, Row } from '../components/Flex';
import { Button } from '../components/ui';
import { useStores } from '../hooks/useStores';
import { CreateEventModal } from '../components/Event/CreateEventModal';

interface EventsProps { }

const Events: React.FC<EventsProps> = () => {
  const { eventsStore } = useStores();
  const navigate = useNavigate();
  const [showCreateModel, setShowModel] = useState(false);

  useEffect(() => {
    eventsStore.fetch();
  }, []);

  const openCreateModal = () => {
    setShowModel(true);
  };

  const closeCreateModel = () => {
    setShowModel(false);
  };

  const navigateToEvent = (id: string) => {
    navigate(`/events/${id}`);
  };

  const createEventHandler = () => {
    setShowModel(false);
    eventsStore.fetch();
  };

  return (
    <Container
      className="grow"
      direction="col"
    >
      <Button
        onClick={() => {
          openCreateModal();
        }}
      >
        Добавить мероприятие
      </Button>
      <Row className="gap-3 flex-wrap justify-evenly">
        {
          eventsStore.viewModel.map((event) => (
            <EventShortCard
              key={event.id}
              event={event}
              onClick={() => navigateToEvent(event.id)}
            />
          ))
        }
      </Row>
      <CreateEventModal
        onClose={closeCreateModel}
        onSuccess={createEventHandler}
        open={showCreateModel}
      />
    </Container>
  );
};
export default observer(Events);
