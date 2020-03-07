import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';

import { Dropdown, InputField, DateInput } from '../index';

export default class Form extends Component {
  state = {
    formData: {},
    isFormValid: false,
  };

  componentDidMount() {
    this.prepareFormData();
  }

  handleChange = (value, field, error) => {
    const formData = cloneDeep(this.state.formData);
    formData[field] = value;
    formData[field + 'Error'] = error && error.error;
    this.setState({
      formData,
      isFormValid: this.validateForm(formData),
    });
  };

  validateForm = formData => {
    const { model } = this.props;
    let isFormValid = true;
    model.forEach(item => {
      if (item.required) {
        isFormValid = isFormValid && !formData[item.field + 'Error'];
      }
    });
    return isFormValid;
  };

  getFormData = () => {
    const { formData, isFormValid } = this.state;
    return { formData, isFormValid };
  };

  resetForm = () => {
    this.prepareFormData();
  };

  prepareFormData() {
    const { model, values } = this.props;
    const formData = {};

    model.forEach(item => {
      formData[item.field] = values && values[item.field] ? values[item.field] : '';
      formData[item.field + 'Error'] = item.required;
    });

    this.setState({ formData, isFormValid: this.validateForm(formData) });
  }

  renderFormFields() {
    const { model, dropdownData } = this.props;
    const { formData } = this.state;
    const arrayOfFields = [];

    model.forEach((item, key) => {
      switch (item.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'password':
        case 'textarea':
          arrayOfFields.push(
            <div key={key} className={'form-group ' + item.styleClass}>
              <InputField
                field={item.field}
                inputValue={formData[item.field] ? formData[item.field] : ''}
                type={item.type}
                label={item.label}
                testId={item.testId}
                placeholder={item.placeholder}
                validators={item.validators}
                onChange={this.handleChange}
              />
            </div>,
          );
          break;
        case 'dropdown':
          arrayOfFields.push(
            <div key={key} className={'form-group ' + item.styleClass}>
              <Dropdown
                onChange={this.handleChange}
                options={dropdownData && dropdownData[item.field]}
                label={item.label}
                testId={item.testId}
                placeholder={item.placeholder}
                validators={item.validators}
                field={item.field}
                value={formData[item.field] ? formData[item.field] : ''}
                isMulti={item.isMulti}
                isSearchable={item.isSearchable}
                isDisabled={item.isDisabled}
              />
            </div>,
          );
          break;
        case 'date':
          arrayOfFields.push(
            <div key={key} className={'form-group ' + item.styleClass}>
              <DateInput
                label={item.label}
                testId={item.testId}
                validators={item.validators}
                field={item.field}
                value={formData[item.field] ? formData[item.field] : ''}
                disabled={item.disabled}
                onChange={this.handleChange}
              />
            </div>,
          );
          break;
        default:
          break;
      }
    });

    return arrayOfFields;
  }

  render() {
    return (
      <div className="form-container" data-test={this.props.testId}>
        <div className="row">{this.renderFormFields()}</div>
      </div>
    );
  }
}

Form.defaultProps = {
  values: {},
  testId: '',
  dropdownData: {},
};

Form.propTypes = {
  model: PropTypes.array.isRequired,
  values: PropTypes.object,
  testId: PropTypes.string,
  dropdownData: PropTypes.object,
};
