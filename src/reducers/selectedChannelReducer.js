import { SELECT_CHANNEL } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_CHANNEL:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
