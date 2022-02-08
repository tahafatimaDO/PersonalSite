import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'components/public/home';
import Demo from 'components/public/demo';
import Login from 'components/public/login';
import Header from 'components/shared/header';
import Footer from 'components/shared/footer';
import * as ROUTES from 'constants/routes';
import NotFound from './404';

export default () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path={ROUTES.DEMO} component={Demo} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <NotFound />
    </Switch>
    <Footer />
  </Fragment>
);
