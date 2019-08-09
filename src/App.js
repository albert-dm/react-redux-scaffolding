import React from 'react';
import { Toolbar } from 'react-md';
import { SearchResults } from './containers/SearchResults';
import { SearchFormContainer } from './containers/SearchFormContainer';
import { SortFormContainer } from './containers/SortFormContainer';

const App = () => {
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
      <SearchResults />
    </div>
  </>;
};

export default App;
