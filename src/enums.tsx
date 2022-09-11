/** Enum для статуса */
enum Status {
  /** Начальный статус */
  Initial,
  /** Статус загрузки */
  Fetching,
  /** Статус ошибки */
  Error,
  /** Статус нормального состояния */
  Success,
}

export default Status;
