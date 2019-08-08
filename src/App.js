import React from 'react';
import { Toolbar } from 'react-md';
import { SearchResults } from './containers/SearchResults';
import { SearchFormContainer } from './containers/SearchFormContainer';

const App = () => {
  return <>
    <Toolbar colored title='Movie Finder' actions={<SearchFormContainer/>} />
    <div id="content">
      <SearchResults />
    </div>
  </>;
};

export default App;
