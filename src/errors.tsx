/** Ошибка превилегий **/
export class PrivilegesException extends Error {
}

/** Ошибка сервера*/
export interface ServerError extends Error {
  type?: string;

  title?: string;

  status?: number;

  detail?: string;

  instance?: string;

  errorId?: string;
}
