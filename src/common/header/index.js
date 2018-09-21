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
  SearchWrapper
} from './style';
import { searchInputFocused, searchInputBlur } from '../../store/actionCreator';

class Header extends Component {

  render() {
    return (
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
                in={this.props.focused}
                timeout={300}
                classNames='slide'>
                <NavSearch 
                  className={this.props.focused ? 'focused' : ' '}
                  onFocus={this.props.searchInputFocused}
                  onBlur={this.props.searchInputBlur}
                ></NavSearch>
              </CSSTransition> 
              <CSSTransition 
                in={this.props.focused}
                timeout={300}
                classNames='fade'>         
                <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
              </CSSTransition>
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
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    searchInputFocused: () => {
      const action = searchInputFocused();
      dispatch(action)
    },
    searchInputBlur: () => {
      const action = searchInputBlur();
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)