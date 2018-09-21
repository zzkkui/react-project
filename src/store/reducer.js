
import { SEARCH_INPUT_FOCUSED, SEARCH_INPUT_BLUR } from './actionTypes';

const defaultStore = {
  focused: false
}

export default (state = defaultStore, action) => {
  if(action.type === SEARCH_INPUT_FOCUSED) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = true;
    return newState
  }
  if(action.type === SEARCH_INPUT_BLUR) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.focused = false;
    return newState
  }
  return state;
}