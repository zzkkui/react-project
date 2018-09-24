import { fromJS } from 'immutable';
import { GET_DETAIL } from './actionTypes';

const defaultState = fromJS({
  title: '',
  content: ''
})

const getDetail = (state, action) => {
  return state.merge({
    title: action.title,
    content: action.content,
  })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAIL: 
      return getDetail(state, action)
    default:
      return state;
  }
  
}