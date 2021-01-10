import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from '@pages/Home';
import Profile from '@pages/Profile';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
