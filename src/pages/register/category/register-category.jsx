/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/button/button';
import FormField from '../../../components/form-field/form-field';
import { BASE_URL } from '../../../config/config';
import { useForm } from '../../../hooks/useForm';
import PageDefault from '../../page-default';

export function RegisterCategory() {
  const initialValue = {
    name: '',
    description: '',
    color: '#000',
  };
  const [categories, setCategories] = useState([]);
  const { handleChange, clearForm, values } = useForm(initialValue);

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
    clearForm();
  }

  return (
    <PageDefault>
      <h1>
        Add new Category:
        {values.title}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="title"
          label="Name"
          value={values.title}
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
            { item.title }
            {' '} | {' '}
            { item.description }
          </li>
        ))
      }

      <Link to="/">Go to Home</Link>
    </PageDefault>
  );
}
