import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Routes from './routes';

const CustomRouter = () => (
  <Switch>
    <Route exact path="/" component={props => <Routes.Home {...props} />} />
    <Route path="/about" component={props => <Routes.About {...props} />} />
  </Switch>
);

export default CustomRouter;
