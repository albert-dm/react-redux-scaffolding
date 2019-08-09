import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, CircularProgress } from 'react-md';
import { SearchResults } from './containers/SearchResults';
import { SearchFormContainer } from './containers/SearchFormContainer';
import { SortFormContainer } from './containers/SortFormContainer';
import { connect } from 'react-redux';
import { ErrorMessage } from './components/ErrorMessage';

const mapStateToProps = state => ({
  error: state.global.error,
  isLoading: state.global.isLoading,
});

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
          <CircularProgress id="loading"/>
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

export default connect(
  mapStateToProps,
)(App);
