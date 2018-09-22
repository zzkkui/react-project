import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo
} from './style';
import { actionCreator } from './store';

const Header = (props) => (
  <Fragment>
    <HeaderWrapper>
      <Logo></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载APP</NavItem>
        <NavItem className='right'>登陆</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition 
            in={props.focused}
            timeout={300}
            classNames='slide'>
            <NavSearch 
              className={props.focused ? 'focused' : ' '}
              onFocus={props.searchInputFocused}
              onBlur={props.searchInputBlur}
            ></NavSearch>
          </CSSTransition> 
          <CSSTransition 
            in={props.focused}
            timeout={300}
            classNames='fade'>         
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
          </CSSTransition>
          <SearchInfo></SearchInfo>
        </SearchWrapper>        
      </Nav>
      <Addition>
        <Button className='writing'>
        <i className='iconfont'>&#xe62b;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>        
      </Addition>
    </HeaderWrapper>
  </Fragment>
)

const mapStateToProps = (state, ownProps) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchInputFocused: () => {
      dispatch(actionCreator.searchInputFocused())
    },
    searchInputBlur: () => {
      dispatch(actionCreator.searchInputBlur())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)