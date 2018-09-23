import React, { Component,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store/index';
import { Home, Detail} from './pages';

class App extends Component {
  render() {
    return (
      <Provider store={store}>          
        <BrowserRouter>    
          <Fragment>
            <Header/>
            <Route path='/' exact component={ Home }></Route>
            <Route path='/detail' exact component={ Detail }></Route>
          </Fragment>      
        </BrowserRouter>      
      </Provider>
    );
  }
}

export default App;
