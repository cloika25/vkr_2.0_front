import BaseState from './BaseState';
import Status from '../../enums';

/** Состояние успешного стора */
class SuccessState extends BaseState {
  constructor() {
    super(Status.Success);
  }
}
export default SuccessState;
