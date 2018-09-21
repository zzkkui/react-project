import React, { Component, Fragment } from 'react';
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

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }

    this.searchInputFocused = this.searchInputFocused.bind(this)
    this.searchInputBlur = this.searchInputBlur.bind(this)
    
  }

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
                in={this.state.focused}
                timeout={300}
                classNames='slide'>
                <NavSearch 
                  className={this.state.focused ? 'focused' : ' '}
                  onFocus={this.searchInputFocused}
                  onBlur={this.searchInputBlur}
                ></NavSearch>
              </CSSTransition> 
              <CSSTransition 
                in={this.state.focused}
                timeout={300}
                classNames='fade'>         
                <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
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

  searchInputFocused() {
    this.setState({
      focused: true
    })
  }

  searchInputBlur() {
    this.setState({
      focused: false
    })
  }

}

export default Header