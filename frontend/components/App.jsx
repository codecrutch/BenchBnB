import React from 'react';
import Greeting from './greeting_container';
import SessionForm from './session_form_container';
import Search from './search_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Bench Lover</h1>
      <Greeting />
      <Route exact path="/" component={Search} />
      <AuthRoute path="/login" component={SessionForm} />
      <AuthRoute path="/signup" component={SessionForm} />
    </header>
  </div>
);

export default App;
