## Form 
* This component will be responsible to generate all forms in application which will handle rendering of different fields along with their validations and keep track of their values. This component will handle all kinds of component in our app such as InputField, TextArea, Dropdown, Checkbox etc.

#### Usage

```
import {Form} from 'library/common/components';
import {createDropdownData} from 'library/utilities/HelperFunctions';

<Form 
  model={Fields[]} 
  ref={el => {this.formRef = el}} 
  testId='form'
  dropdownData={
    venues: createDropdownData(venueArray, [id,name])
  }
  values={...values}
   />

   Note: dropdownData should be an object and the data should be with the field name which you have specified in form component model. 

```

#### Models

```
# Input Field - text, email, number, password

{
    label: '',
    value: '',
    type: 'text',
    placeholder: 'Email',
    field: 'email',
    validators: [
      { check: Validators.required, message: 'Email is mandatory' },
      { check: Validators.email, message: 'Email is invalid' },
    ],
    required: true,
    styleClass: 'col-sm-12',
},

# Dropdown

{
    label: 'Colors',
    value: {},
    type: 'dropdown',
    placeholder: 'Please select any value',
    field: 'colors',
    validators: [],
    required: false,
    styleClass: 'col-sm-12',
    isSearchable: true,
    isMulti: false,
    isDisabled: false
}
```
