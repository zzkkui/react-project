
import axios from 'axios'
import { 
  GET_HOME_DATA,
  GET_MORE_LIST,
  TOGGLE_SCROLL_TOP
} from './actionTypes'

const getHomeData = (data) => ({
  type: GET_HOME_DATA,
  topicList: data.topicList,
  articleList: data.articleList,
  recommendList: data.recommendList,
})

const getMoreList = (list, page) => ({
  type: GET_MORE_LIST,
  articleList: list,
  nextPage: page + 1,
})

export const getHomeDataApi = () => {
  return (dispatch) => {
    axios.get('./api/home.json').then((res) => {
      dispatch(getHomeData(res.data.data))
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const getLoadMore = (page) => {
  return (dispatch) => {
    axios.get('./api/homeList.json?page='+ page +'').then((res) => {
      dispatch(getMoreList(res.data.data, page))
    }).catch((err) => {
      console.log(err);
    })
  }
}

export const toggleTopShow = (show) => ({
  type: TOGGLE_SCROLL_TOP,
	show
})
