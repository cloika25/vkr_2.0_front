import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventShortCard from '../components/Event/EventShortCard';
import { Container, Row } from '../components/Flex';
import { useStores } from '../hooks/useStores';

interface EventsProps {
}

const Events: React.FC<EventsProps> = () => {
  const { eventsStore } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    eventsStore.fetch();
  }, []);

  return (
    <Container>
      <div>
        <Row className="gap-3 flex-wrap">
          {eventsStore.viewModel.map(
            (event) => (
              <EventShortCard
                key={event.id}
                event={event}
                onClick={() => {
                  navigate(`/events/${event.id}`);
                }}
              />
            ),
          )}
        </Row>
      </div>
    </Container>
  );
};
export default observer(Events);
