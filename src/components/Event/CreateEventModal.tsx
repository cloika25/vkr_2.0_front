import { Modal, TextField, Typography } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EventsService } from '../../services/EventsService';
import { CreateEventForm } from '../../types/Events.types';
import { Button } from '../ui';

interface CreateEventModalProps {
  onClose: () => void;
  onSuccess: () => void;
  open: boolean;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({
  onClose, onSuccess, open,
}) => {
  const { register, handleSubmit } = useForm<CreateEventForm>();

  const formSubmitHandler:SubmitHandler<CreateEventForm> = async (value) => {
    try {
      await EventsService.create(value);
      onSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      className="flex"
      onClose={onClose}
      open={open}
    >
      <form
        className="bg-bgDefault m-auto p-6 rounded-md gap-4 flex flex-col"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <Typography
          className="justify-center"
          variant="h5"
        >
          Новое мероприятие
        </Typography>
        <TextField
          {...register('fullName', { required: true })}
          label="Название мероприятия"
        />
        <TextField
          {...register('dateStart', {
            required: true,
            valueAsDate: true,
          })}
          InputLabelProps={{
            shrink: true,
          }}
          label="Дата начала"
          type="date"
        />
        <TextField
          {...register('dateEnd', { valueAsDate: true })}
          InputLabelProps={{
            shrink: true,
          }}
          label="Дата окончания"
          type="date"
        />
        <TextField
          {...register('description', { required: true })}
          label="Описание"
        />
        <Button type="submit">
          Добавить
        </Button>
      </form>
    </Modal>
  );
};
