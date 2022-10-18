import { EntityList } from '.';

export interface EventsDto {
  id: string;
  fullName: string;
  dateStart: string;
  dateEnd: string;
}

export type GetEventsResponse = EntityList<EventsDto>

export type GetEventsByIdResponse = EventsDto
