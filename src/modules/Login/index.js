import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import { getAuth, setAuthentication } from 'library/common/actions';
import { Button, Form } from 'library/common/components';
import { URLS } from 'library/common/constants';
import axiosInstance from 'core/Axios';

import { loginBg, loginFormModel, loginImage } from './constants';
import './loginStyles.scss';

export class Login extends Component {
  formRef = createRef();

  state = {
    isLoading: false,
    loginError: null,
  };

  componentDidMount() {
    document.title = 'Login';
    this.props.getAuth();
  }

  handleLogin = async e => {
    e.preventDefault();
    const values = this.formRef.getFormData();
    const { formData, isFormValid } = values;
    const { REACT_APP_CLIENT, REACT_APP_SECRET } = process.env;

    if (isFormValid) {
      this.setState({ isLoading: true });

      const body = new URLSearchParams();
      body.append('username', formData.username);
      body.append('password', formData.password);
      body.append('scope', 'webclient');
      body.append('grant_type', 'password');

      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: REACT_APP_CLIENT,
          password: REACT_APP_SECRET,
        },
      };

      axiosInstance
        .post(URLS.login, body, config)
        .then(({ status, data }) => {
          if (status === 200) {
            this.setState({ isLoading: false });
            this.props.setAuthentication(data);
          }
        })
        .catch(err => {
          if (err.hasOwnProperty('response') && (err.response.status === 401 || err.response.status === 400)) {
            this.setState({ isLoading: false, loginError: 'Login failed. Please check credentials again.' });
          } else {
            this.setState({ isLoading: false, loginError: 'Something went wrong. Please try again.' });
          }
        });
    } else {
      this.setState({ isLoading: false, loginError: 'Please check form' });
    }
  };

  render() {
    const { isLoading, loginError } = this.state;

    return (
        <div className="vh-100 login bg-white d-flex justify-content-center align-items-center">
          <div className="col-5 login-background vh-100 p-0">
            <img src={loginImage} alt="background" />
          </div>
          <div className="col-7 login-form vh-100 d-flex justify-content-center align-items-center">
            <div className="col-sm-5">
              <h4 className="pb-4">Sign In</h4>
              {!!loginError && <p className="text-danger">{loginError}</p>}
              <form onSubmit={this.handleLogin}>
                <Form
                    ref={el => {
                      this.formRef = el;
                    }}
                    model={loginFormModel}
                />
                <Button
                    type="submit"
                    loading={isLoading}
                    onClick={this.handleLogin}
                    styleClass="btn-success btn-block"
                    value="Login"
                />
              </form>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, { getAuth, setAuthentication })(Login));
