/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/albums" />
      <Route path="albums/:albumId" component={Album} />
      <Route path="/albums" component={Albums} />
    </Route>
  </Router>,
  document.getElementById('app'),
);

// <AppContainer>
//   <Stuff />
// </AppContainer>


// ReactDOM.render(
// <div>
//   <h3>FooBar</h3>
//   <Router history={hashHistory}>
//     <Route path="/hello" component={BillMurray} />
//   </Router>
//   <p>This paragraph contains words, but you knew that already.</p>
// </div>,
// document.getElementById('app')
// )
