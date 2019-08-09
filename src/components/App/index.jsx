import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, CircularProgress } from 'react-md';
import { SearchResults } from '../../containers/SearchResults';
import { SearchFormContainer } from '../../containers/SearchFormContainer';
import { SortFormContainer } from '../../containers/SortFormContainer';
import { ErrorMessage } from '../ErrorMessage';

const App = ({
  error,
  isLoading
}) => {
  return <>
    <Toolbar
      colored
      title='Movie Finder'
      actions={[
        <SearchFormContainer key="search" />,
        <SortFormContainer key="sort" />,
      ]}
      prominent />
    <div id="content">
      {
        isLoading
          ?
          <CircularProgress id="loading" />
          :
          error === ''
            ?
            <SearchResults />
            :
            <ErrorMessage message={error} />
      }
    </div>
  </>;
};

App.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export { App };