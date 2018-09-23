
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios'

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10) 
})

export const searchInputFocused = () => ({
  type: actionTypes.SEARCH_INPUT_FOCUSED,
})

export const searchInputBlur = () => ({
  type: actionTypes.SEARCH_INPUT_BLUR,
})

export const handleMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
})

export const handleMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page: page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch((err) => {
      console.log(err);
    })
  }
}