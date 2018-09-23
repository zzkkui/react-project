
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
})

// console.log(defaultStore)

export default (state = defaultStore, action) => {
  // if(action.type === actionTypes.SEARCH_INPUT_FOCUSED) {
  //   //immutable对象的 set 方法，还会结合之前的 immutable对象的值
  //   //和设置的值，返回一个全新的对象
  //   return state.set('focused', true)
  // }
  // if(action.type === actionTypes.SEARCH_INPUT_BLUR) {
  //   return state.set('focused', false)
  // }
  // if(action.type === actionTypes.CHANGE_LIST) {
  //   return state.set('list', action.data)
  // }
  switch (action.type) {
    case actionTypes.SEARCH_INPUT_FOCUSED:
      return state.set('focused', true)
    case actionTypes.SEARCH_INPUT_BLUR:
      if(!state.get('mouseIn')) {
        return state.merge({
          focused: false,
          page: 1
        })
      }else{
        return state.set('focused', false)
      }
    case actionTypes.CHANGE_LIST:
      //return state.set('list', action.data).set('totalPage', action.totalPage)
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER: 
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE: 
      if(!state.get('focused')) {
        return state.merge({
          mouseIn: false,
          page: 1
        })
      }else{
        return state.set('mouseIn', false)
      }     
    case actionTypes.CHANGE_PAGE: 
      return state.set('page', action.page)
    default:
      return state;
  }
  
}