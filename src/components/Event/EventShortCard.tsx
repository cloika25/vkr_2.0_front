import { Typography } from '@mui/material';
import React from 'react';
import { parseStyles } from '../../services/utils';
import { EventsViewModel } from '../../stores/Events/EventsViewModel';
import { Container } from '../Flex';

interface EventShortCardProps {
  event: EventsViewModel;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const EventShortCard: React.FC<EventShortCardProps> = ({ event, onClick }) => (
  <Container
    className={parseStyles(`
      p-2 border border-bgDefault 
      hover:shadow-bgDefault hover:shadow-lg 
      duration-300 ease-in hover:ease-out
      cursor-pointer min-w-[30%] max-h-[400px]
      flex-col justify-between
    `)}
    direction="col"
    onClick={onClick}
  >
    <div className=" grow-1">
      <Typography variant="h5">{event.fullName}</Typography>
    </div>
    {event.description && (
      <div>
        <Typography>Описание:</Typography>
        <Typography>{event.description}</Typography>
      </div>
    )}
    {!!event.stagesCount && (
      <Typography>{`Этапы:${event.stagesNames.join(', ')}` }</Typography>
    )}
    <div className="mb-2">
      <Typography>
        Автор:
        {' '}
        {event.authorName}
      </Typography>
      <div>
        {event.dateEndFormatted}
        {' - '}
        { event.dateEndFormatted ?? '...'}
      </div>
    </div>
  </Container>
);
export default EventShortCard;
