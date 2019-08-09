import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './sortForm.scss';

import { SelectField, Button } from 'react-md';

const SortForm = ({
  sort,
}) => {
  const [attribute, setAttribute] = useState(undefined);
  const [order, setOrder] = useState('Asc.');

  const handleSubmit = (event) => {
    event.preventDefault();
    sort({ attribute, order });
  };

  return <form onSubmit={handleSubmit} className="search-form">
    <SelectField
      id="select-attribute"
      placeholder="Order by"
      menuItems={['Title', 'Rate']}
      position={SelectField.Positions.BELOW}
      simplifiedMenu={false}
      value={attribute}
      onChange={(value) => setAttribute(value)}
    />
    <SelectField
      id="select-order"
      placeholder="Strings button"
      menuItems={['Asc.', 'Desc.']}
      position={SelectField.Positions.BELOW}
      simplifiedMenu={false}
      value={order}
      onChange={(value) => setOrder(value)}
    />
    <Button
      primary
      type="submit"
      disabled={attribute===undefined}
      flat
    >
      Sort
    </Button>
  </form>;
};

SortForm.propTypes = {
  sort: PropTypes.func,
};

export { SortForm };

