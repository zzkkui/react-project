import { fromJS } from 'immutable';
import { 
  GET_HOME_DATA,
  GET_MORE_LIST,
  TOGGLE_SCROLL_TOP
} from './actionTypes'

const defaultStore = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
})

const getHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  })
}

const getMoreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.articleList)),
    articlePage: action.nextPage
  })
}

export default (state = defaultStore, action) => {
  switch (action.type) {
    case GET_HOME_DATA: 
      return getHomeData(state, action)
    case GET_MORE_LIST: 
      return getMoreList(state, action)
    case TOGGLE_SCROLL_TOP:
			return state.set('showScroll', action.show);
    default:
      return state;
  }
  
}