export interface StageInEvent {
  /** Название этапа */
  name: string;
  /** Описание этапа */
  description: string;
  /** Дата начала */
  dateStart: Date;
  /** Дата окончания */
  dateEnd: Date;
}
