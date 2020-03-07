import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

import { ErrorBoundary, Loader } from 'library/common/components';
import Routes from 'core/Routes';
import { getAuth } from 'library/common/actions';

class App extends Component {
  componentDidMount() {
    this.props.getAuth();
  }

  render() {
    return (
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </ErrorBoundary>
    );
  }
}

export default connect(null, { getAuth })(App);
