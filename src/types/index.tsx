/** Вью модель сущности */
export interface IViewModel<T> {
  /** Объект с данными */
  get data(): Partial<T>;
  /** Получить чистый объект с данными */
  getRawData: () => Partial<T>;
  /** Очистить вью модель */
  clear(): void;
}

/** Список сущностей */
export interface EntityList<T> {
  /** массив сущностей */
  entities?: Array<T>;
  /** кол-во сущностей всего */
  totalCount?: number;
}

/** Общий фильтр для списка сущностей */
export interface ListBaseFilter {
  /** Размер страницы */
  pageSize?: number;
  /** Номер страницы */
  pageNumber?: number;
  /** Поле для сортировки */
  orderBy?: string;
  /** Сортировать по возрастанию */
  isAscending?: boolean;
}
