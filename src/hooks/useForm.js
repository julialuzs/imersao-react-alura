import { useState } from 'react';

export function useForm(initialValue) {
  const [values, setValues] = useState(initialValue);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange({ target }) {
    setValue(target.name, target.value);
  }

  function clearForm() {
    setValues(initialValue);
  }

  return { handleChange, clearForm, values };
}
