import React from 'react';
import PageDefault from '../../page-default';
import { Link } from 'react-router-dom';

function RegisterVideo() {
  return (
    <PageDefault>
      <h1>Add new Video</h1>
      <Link to='/category'>New Category</Link>
    </PageDefault>
  );
}

export default RegisterVideo;