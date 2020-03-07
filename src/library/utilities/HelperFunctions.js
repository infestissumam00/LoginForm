/**
 * This function will create data with supported format for react-select dropdown.
 * @param data - array of data
 * @param keys - e.g: ['id', 'name'] which can be used to create format for dropdown
 * @returns {[]}
 */
export const createDropdownData = (data = [], keys = []) => {
  const createdArray = [];
  if (data && data.length) {
    data.forEach(item => {
      createdArray.push({
        value: item[keys[0]],
        label: item[keys[1]],
      });
    });
  }
  return createdArray;
};

/**
 * This function will extract `value` from selected multiple dropdown. This will only used when Dropdown component has isMulti: true
 * @param values - selected values from dropdown
 * @returns {[]}
 */
export const fetchIdsFromSelectedDropdownValues = (values = []) => {
  const extractedValue = [];
  if (values && values.length) {
    values.forEach(item => {
      extractedValue.push(item.value);
    });
  }
  return extractedValue;
};

export const formatCurrency = amount => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
};

export const removeErrorFieldsFromValues = formData => {
  const fields = {};
  for (const key in formData) {
    if (!key.includes('Error')) {
      fields[key] = formData[key];
    }
  }
  return fields;
};

export const fetchErrorFields = (formData, formModel) => {
  const fields = [];
  for (const key in formData) {
    if (key.includes('Error') && formData[key]) {
      formModel.forEach(form => {
        if (form.field === key.replace('Error', '')) {
          fields.push(form.label);
        }
      });
    }
  }
  return fields;
};
