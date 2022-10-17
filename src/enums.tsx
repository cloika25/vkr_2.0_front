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

export enum ValidationError {
  RequiredField = 'Поле обязательно для заполнения',
  EmailField = 'Проверьте правильность электронной почты',
  ConfirmPassword = 'Пароли не совпадают'
}

export default Status;
