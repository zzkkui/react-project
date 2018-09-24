import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';
import { Home, LogIn, Write} from './pages';
import Detail from './pages/detail/loadable';

class App extends Component {
  render() {
    return (
      <Provider store={store}>          
        <BrowserRouter>    
          <Fragment>
            <Header/>
            <Route path='/' exact component={ Home }></Route>
            <Route path='/logIn' exact component={ LogIn }></Route>
            <Route path='/write' exact component={ Write }></Route>
            <Route path='/detail/:id' exact component={ Detail }></Route>
          </Fragment>      
        </BrowserRouter>      
      </Provider>
    );
  }
}

export default App;
