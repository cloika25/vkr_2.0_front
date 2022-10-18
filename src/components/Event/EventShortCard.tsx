import React from 'react';
import { EventsViewModel } from '../../stores/Events/EventsViewModel';
import { Container, Row } from '../Flex';

interface EventShortCardProps {
  event: EventsViewModel;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const EventShortCard: React.FC<EventShortCardProps> = ({ event, onClick }) => (
  <Container
    className="p-2 border border-bgDefault hover:shadow-bgDefault hover:shadow-lg cursor-pointer min-w-[200px]"
    direction="col"
    onClick={onClick}
  >
    <Row>
      {event.fullName}
    </Row>
    <Row>{event.dateFrom}</Row>
  </Container>
);
export default EventShortCard;
