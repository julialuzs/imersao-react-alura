import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/button/button';
import FormField from '../../../components/form-field/form-field';
import { useForm } from '../../../hooks/useForm';
import PageDefault from '../../page-default';
import { VideoService } from '../../../services/videos';
import { CategoryService } from '../../../services/categories';

// TODO: add validation for form
export function RegisterVideo() {
  const videoService = new VideoService();
  const categoryService = new CategoryService();

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    const body = {
      title: values.title,
      url: values.url,
      categoryId: values.categoryId,
    };
    videoService.add(body).then(() => {
      history.push('/');
    });
  }

  useEffect(() => {
    categoryService.getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Add new Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="title"
          label="Title"
          value={values.title}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="url"
          label="URL"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          type="select"
          name="categoryId"
          label="Category"
          options={categories}
          value={values.categoryId}
          onChange={handleChange}
        />

        <Button type="submit">Save</Button>
      </form>
      <Link to="/register/category">New Category</Link>
    </PageDefault>
  );
}
