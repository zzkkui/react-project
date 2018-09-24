import axios from 'axios'
import { GET_DETAIL } from './actionTypes';

const getDetail = (data) => ({
  type: GET_DETAIL,
  title: data.title,
  content: data.content,
})

export const getDetailInfo = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+ id +'').then((res) => {
      dispatch(getDetail(res.data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}