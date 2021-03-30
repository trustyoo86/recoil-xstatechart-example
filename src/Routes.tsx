import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Home from '@pages/Home';
import Profile from '@pages/Profile';
import Search from '@pages/Search';
import Checkbox from '@pages/Checkbox';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/checkbox" component={Checkbox} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
