import { EntityList } from '.';

export interface EventsDto {
  id: string;
  fullName: string;
  dateStart: string;
  dateEnd: string;
}

export interface CreateEventForm {
  fullName: string;
  dateStart: Date;
  dateEnd: Date;
}

export type GetEventsResponse = EntityList<EventsDto>

export type GetEventsByIdResponse = EventsDto
