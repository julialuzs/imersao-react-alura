import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../page-default';

export function RegisterVideo() {
  return (
    <PageDefault>
      <h1>Add new Video</h1>
      <Link to="/register/category">New Category</Link>
    </PageDefault>
  );
}
