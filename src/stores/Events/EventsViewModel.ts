import dayjs from 'dayjs';
import { DateFormat } from '../../enums';
import { EventsDto } from '../../types/Events.types';
import BaseViewModel from '../BaseViewModel';

/** Вью модель элемента списка */
export class EventsViewModel extends BaseViewModel<EventsDto> {
  get id() {
    return this.data.id ?? '';
  }

  get fullName() {
    return this.data.fullName ?? '';
  }

  get dateFrom() {
    return dayjs(this.data.dateStart).format(DateFormat) ?? '';
  }
}
