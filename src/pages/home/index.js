import React, { PureComponent } from 'react';
//PureComponent 要和 immutable 一起用
import { connect } from 'react-redux';
import { List, Recommend, Topic, Writer } from './components';
import { actionCreator } from './store';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {

  render() {
    const { showScroll } = this.props
    return (
      <HomeWrapper>
        <HomeLeft>
          <img 
            className='banner-image'
            alt=''     src='//upload.jianshu.io/admin_banners/web_images/4471/2f39321746a68152e26628c9dfe614edef1affb5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        { showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

  handleScrollTop() {
		window.scrollTo(0, 0);
	}

}

const mapStateToProps = (state, ownProps) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHomeData: () => {
      dispatch(actionCreator.getHomeDataApi())
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 200) {
        dispatch(actionCreator.toggleTopShow(true))
      }else {
        dispatch(actionCreator.toggleTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)

