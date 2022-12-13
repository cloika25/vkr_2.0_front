import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import React, { PropsWithChildren, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../components/Flex';
import { useStores } from '../hooks/useStores';
import { StageInEvent } from '../types/Stages.types';

interface EventProps {
}

const StagePreview: React.FC<{stage: StageInEvent}> = ({ stage: { name } }) => (
  <div>{name}</div>
);

const InfoBlock: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="mt-5">{children}</div>
);

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
      <Typography variant="h2">{eventStore.viewModel.fullName}</Typography>
      <div>
        {eventStore.viewModel.stagesNames.map(
          (name) => <span key={name}>{name}</span>,
        )}
      </div>
      <InfoBlock>
        <Typography
          className="font-bold"
          variant="h5"
        >
          Описание
        </Typography>
        <Typography>{eventStore.viewModel.description ?? 'Автор не добавил описание для данного мероприятия'}</Typography>
      </InfoBlock>
      <InfoBlock>
        <Typography
          className="font-bold"
          variant="h5"
        >
          Этапы
        </Typography>
        {!eventStore.viewModel.stagesCount && 'Автор не добавил этапов'}
        {eventStore.viewModel.stages?.map((stage) => (
          <StagePreview
            key={stage.name}
            stage={stage}
          />
        ))}
      </InfoBlock>
      <InfoBlock>
        <Typography
          className="font-bold"
          variant="h5"
        >
          Автор
        </Typography>
        <Typography>{eventStore.viewModel.authorName}</Typography>
      </InfoBlock>
    </Container>
  );
};
export default observer(Event);
