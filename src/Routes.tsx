import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
