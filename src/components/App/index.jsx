import React from 'react';
import PropTypes from 'prop-types';

const App = ({
  error,
  isLoading
}) => {
  return <>
    <div>
      {
        error ? <h1>{JSON.stringify(error)}</h1> :
          isLoading ? <h1>Loading...</h1> :
            <h1>Seja bem vindo</h1>
      }
    </div>
  </>;
};

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export { App };