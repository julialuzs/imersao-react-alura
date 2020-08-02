import React from 'react';
import PageDefault from '../../page-default';
import { Link } from 'react-router-dom';

function RegisterCategory() {
  return (
    <PageDefault>
      <h1>Add new Category</h1>
      <Link to='/'>Go to Home</Link>
    </PageDefault>
  );
}

export default RegisterCategory;