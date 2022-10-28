import dayjs from 'dayjs';
import { computed } from 'mobx';
import { DateFormat } from '../../enums';
import { GetEventsByIdResponse } from '../../types/Events.types';
import BaseViewModel from '../BaseViewModel';

export class EventViewModel extends BaseViewModel<GetEventsByIdResponse> {
  /** Получение */
  @computed get fullName() {
    return this.data.fullName ?? '';
  }

  /** Получение */
  @computed get dateStart() {
    return this.data.dateStart;
  }

  /** Получение */
  @computed get dateStartFormatted() {
    return this.data.dateStart ? dayjs(this.data.dateStart).format(DateFormat) : '';
  }

  /** Получение */
  @computed get dateEnd() {
    return this.data.dateEnd;
  }

  /** Получение */
  @computed get dateEndFormatted() {
    return this.data.dateEnd ? dayjs(this.data.dateEnd).format(DateFormat) : '';
  }
}
