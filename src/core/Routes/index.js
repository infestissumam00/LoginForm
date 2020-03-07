import { connect } from 'react-redux';
import React, { lazy } from 'react';
import { Redirect, Route, withRouter, Switch} from 'react-router-dom';

const Login = lazy(() => import('modules/Login'));

const Routes = props => {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
              return <Redirect to="/login" />;
          }}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};



export default withRouter(connect()(Routes));
