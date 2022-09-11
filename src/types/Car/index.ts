import { ListBaseFilter } from '..';

/** Респонс информации о автомобиле */
export interface GetCarByIdResponse {
  /** id */
  id?: string;
  /** Доп инфо */
  details?: {
    /** Марка */
    brand?: string;
    /** Модель */
    model?: string;
    /** Цвет */
    color?: string;
    /** Цена */
    price?: number;
  };
}

/** Реквест запроса списка автомобилей */
export interface GetCarsListRequest extends ListBaseFilter {
  /** Марка */
  brand?: string;
}
