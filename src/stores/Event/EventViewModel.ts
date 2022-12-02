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

  @computed get description() {
    return this.data.description;
  }

  @computed get stages() {
    return this.data.stages;
  }

  @computed get stagesCount(): number {
    return this.data.stages?.length || 0;
  }

  @computed get stagesNames(): string[] {
    return this.data.stages?.map((stage) => stage.name) || [];
  }

  @computed get dateStart() {
    return this.data.dateStart;
  }

  @computed get dateStartFormatted() {
    return this.data.dateStart ? dayjs(this.data.dateStart).format(DateFormat) ?? '' : undefined;
  }

  @computed get dateEnd() {
    return this.data.dateEnd;
  }

  @computed get dateEndFormatted() {
    return this.data.dateEnd ? dayjs(this.data.dateEnd).format(DateFormat) ?? '' : undefined;
  }
}
