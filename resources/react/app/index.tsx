import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/public/home';
import Demo from 'components/public/demo';
import Header from 'components/shared/header';
import * as ROUTES from 'constants/routes';
import NotFound from './404';

export default () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path={ROUTES.DEMO} component={Demo} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <NotFound />
    </Switch>
  </Fragment>
);
