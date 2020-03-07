import { Validators } from '../../library/utilities/Validators';

export const loginBg = require('../../resources/images/login-bg.jpg');
export const loginImage = require('../../resources/images/loginBackground.png');

export const loginFormModel = [
  {
    label: '',
    value: '',
    type: 'text',
    placeholder: 'Email',
    field: 'username',
    validators: [
      { check: Validators.required, message: 'Email is mandatory' },
      { check: Validators.email, message: 'Email is invalid' },
    ],
    required: true,
    styleClass: 'col-sm-12',
  },
  {
    label: '',
    value: '',
    type: 'password',
    placeholder: 'Password',
    field: 'password',
    validators: [{ check: Validators.required, message: 'Password is mandatory' }],
    required: true,
    styleClass: 'col-sm-12',
  },
];
