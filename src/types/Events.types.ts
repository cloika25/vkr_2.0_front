import { EntityList } from '.';
import { StageInEvent } from './Stages.types';

export interface EventsDto {
  id: string;
  fullName: string;
  dateStart: string;
  dateEnd?: string;
  description?: string;
}

export interface CreateEventForm {
  fullName: string;
  dateStart: Date;
  dateEnd: Date;
  description: string;
}

export type GetEventsResponse = EntityList<EventsDto>

export type Author = {
  id: number;
  login: string;
  name: string;
}

export type GetEventsByIdResponse = EventsDto & {
  stages: StageInEvent[];
  author: Author;
}
