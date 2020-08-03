import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../page-default';
import { FormField } from '../../../components/form-field/form-field';

export function RegisterCategory() {
  const category = {
    name: '',
    description: '',
    color: '#000'
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(category);

  function handleSubmit(event) {
    event.preventDefault();
    setCategories([...categories, values]);
  }
  
  function handleChange({ target }) { 
    setValue(target.name, target.value);
  }

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  return (
    <PageDefault>
      <h1>Add new Category: {values.name} </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="color"
          label="Color"
          value={values.color}
          onChange={handleChange}
        />

        <button>Save</button>
      </form>

      {
        categories.map((category, idx) => (
          <li key={idx}> { category.name } </li>
        ))
      }

      <Link to='/'>Go to Home</Link>
    </PageDefault>
  );
}
