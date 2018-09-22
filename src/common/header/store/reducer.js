
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
  focused: false
})

// console.log(defaultStore)

export default (state = defaultStore, action) => {
  if(action.type === actionTypes.SEARCH_INPUT_FOCUSED) {
    //immutable对象的 set 方法，还会结合之前的 immutable对象的值
    //和设置的值，返回一个全新的对象
    return state.set('focused', true)
  }
  if(action.type === actionTypes.SEARCH_INPUT_BLUR) {
    return state.set('focused', false)
  }
  return state;
}