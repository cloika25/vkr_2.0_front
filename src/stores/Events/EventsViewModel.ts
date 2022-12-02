import dayjs from 'dayjs';
import { DateFormat } from '../../enums';
import { GetEventsByIdResponse } from '../../types/Events.types';
import BaseViewModel from '../BaseViewModel';

/** Вью модель элемента списка */
export class EventsViewModel extends BaseViewModel<GetEventsByIdResponse> {
  get id() {
    return this.data.id ?? '';
  }

  get fullName() {
    return this.data.fullName ?? '';
  }

  get description() {
    return this.data.description;
  }

  get stagesCount(): number {
    return this.data.stages?.length || 0;
  }

  get stagesNames(): string[] {
    return this.data.stages?.map((stage) => stage.name) || [];
  }

  get dateStart() {
    return this.data.dateStart;
  }

  get dateStartFormatted() {
    return this.data.dateStart ? dayjs(this.data.dateStart).format(DateFormat) ?? '' : undefined;
  }

  get dateEnd() {
    return this.data.dateEnd;
  }

  get dateEndFormatted() {
    return this.data.dateEnd ? dayjs(this.data.dateEnd).format(DateFormat) ?? '' : undefined;
  }
}
