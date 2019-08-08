import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './searchForm.scss';

import { TextField, Button } from 'react-md';

const SearchForm = ({
  search,
}) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    search({ title, year });
  };

  return <form onSubmit={handleSubmit} className="search-form">
    <TextField
      id="title"
      placeholder="Título"
      value={title}
      onChange={(value) => setTitle(value)}
      required
    />
    <TextField
      id="year"
      placeholder="Ano"
      value={year}
      onChange={(value) => setYear(value)}
    />
    <Button
      icon
      primary
      type="submit"
    >
      search
    </Button>
  </form>;
};

SearchForm.propTypes = {
  search: PropTypes.func,
};

export { SearchForm };

