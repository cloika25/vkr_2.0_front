import BaseState from './BaseState';
import Status from '../../enums';

/**  Состояние стора во время загрузки */
class FetchingState extends BaseState {
  constructor() {
    super(Status.Fetching);
  }
}
export default FetchingState;
