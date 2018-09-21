import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  font-size: 17px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 18px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  .fade-enter {
    transition: all .3s ease-out;
  }
  .fade-enter-active {
    background: transparent;
  }
  .fade-exit {
    transition: all .3s ease-in;
  }
  .fade-exit-active {
    background: #777;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all .3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .3s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149
  }
  .iconfont{
    display: inline-block;
    padding: 0 5px;
    font-size: 16px;
  }
`