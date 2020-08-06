/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../page-default';
import FormField from '../../../components/form-field/form-field';
import Button from '../../../components/button/button';
import { BASE_URL } from '../../../utils/constants';

export function RegisterCategory() {
  const category = {
    name: '',
    description: '',
    color: '#000',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(category);

  function addNewCategory(newCategory) {
    const URL = `${BASE_URL}/categories`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(newCategory),
    };

    fetch(URL, options)
      .then(async (response) => {
        const responseString = await response.json();
        setCategories([...[responseString], ...categories]);
      });
  }

  useEffect(() => {
    const URL = `${BASE_URL}/categories`;
    fetch(URL)
      .then(async (response) => {
        const responseString = await response.json();
        setCategories([...responseString]);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    addNewCategory(values);
  }

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange({ target }) {
    setValue(target.name, target.value);
  }

  return (
    <PageDefault>
      <h1>
        Add new Category:
        {values.name}
      </h1>

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

        <Button>Save</Button>
      </form>

      {
        categories.map((item) => (
          <li key={`${item.id}`}>
            { item.name }
            {' '}
            |
            {' '}
            { item.description }
          </li>
        ))
      }

      <Link to="/">Go to Home</Link>
    </PageDefault>
  );
}
