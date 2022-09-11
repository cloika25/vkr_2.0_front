import BaseState from './BaseState';
import Status from '../../enums';
import { ServerError } from '../../errors';

/** Состояние стора с ошибкой */
class ErrorState extends BaseState {
  constructor(error?: unknown) {
    super(
      Status.Error,
      (error as ServerError)?.title ?? 'Произошла непредвиденная ошибка',
    );
  }
}
export default ErrorState;
