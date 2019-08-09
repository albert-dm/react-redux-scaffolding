import React from 'react';
import { shallow } from 'enzyme';
import { MovieList } from './index';

const movies = [
  {
    Title: 'Avengers',
    imdbRating: 9,
    imdbID: 1,
  },
  {
    Title: 'Resident Evil',
    imdbRating: 5.3,
    imdbID: 2,
  },
  {
    Title: 'Matrix',
    imdbRating: 10,
    imdbID: 3,
  },
  {
    Title: 'Titanic',
    imdbRating: 7.2,
    imdbID: 4,
  },
];

describe('Testing MovieList behavior', () => {
  it('Should show search if no movies', () => {
    const component = shallow(<MovieList movies={[]} />);  
    expect(component).toMatchSnapshot();
  });
  it('Should show list if movies', () => {
    const component = shallow(<MovieList movies={movies} />);  
    expect(component).toMatchSnapshot();
  });
});