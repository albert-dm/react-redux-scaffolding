import { sortMovies } from './movieHelper';

const movies = [
  {
    Title: 'Avengers',
    imdbRating: 9
  },
  {
    Title: 'Resident Evil',
    imdbRating: 5.3
  },
  {
    Title: 'Matrix',
    imdbRating: 10
  },
  {
    Title: 'Titanic',
    imdbRating: 7.2
  },
];

describe('Testing sortMovies', () => {
  it('Should sort Title Asc.', () => {
    const filters = {attribute: 'Title', order: 'Asc.'};
    const sortedMovies = sortMovies({movies, ...filters});

    const expected = [
      {
        Title: 'Avengers',
        imdbRating: 9
      },
      {
        Title: 'Matrix',
        imdbRating: 10
      },
      {
        Title: 'Resident Evil',
        imdbRating: 5.3
      },
      {
        Title: 'Titanic',
        imdbRating: 7.2
      },
    ];

    expect(JSON.stringify(sortedMovies)).toMatch(JSON.stringify(expected));
  });
  it('Should sort Title Desc.', () => {
    const filters = {attribute: 'Title', order: 'Desc.'};
    const sortedMovies = sortMovies({movies, ...filters});

    const expected = [
      {
        Title: 'Titanic',
        imdbRating: 7.2
      },
      {
        Title: 'Resident Evil',
        imdbRating: 5.3
      },
      {
        Title: 'Matrix',
        imdbRating: 10
      },
      {
        Title: 'Avengers',
        imdbRating: 9
      },
    ];

    expect(JSON.stringify(sortedMovies)).toMatch(JSON.stringify(expected));
  });
  it('Should sort Rate Asc.', () => {
    const filters = {attribute: 'Rate', order: 'Asc.'};
    const sortedMovies = sortMovies({movies, ...filters});

    const expected = [
      {
        Title: 'Resident Evil',
        imdbRating: 5.3
      },
      {
        Title: 'Titanic',
        imdbRating: 7.2
      },
      {
        Title: 'Avengers',
        imdbRating: 9
      },      
      {
        Title: 'Matrix',
        imdbRating: 10
      },      
    ];

    expect(JSON.stringify(sortedMovies)).toMatch(JSON.stringify(expected));
  });
  it('Should sort Rate Desc.', () => {
    const filters = {attribute: 'Rate', order: 'Desc.'};
    const sortedMovies = sortMovies({movies, ...filters});

    const expected = [
      {
        Title: 'Matrix',
        imdbRating: 10
      },
      {
        Title: 'Avengers',
        imdbRating: 9
      },
      {
        Title: 'Titanic',
        imdbRating: 7.2
      },
      {
        Title: 'Resident Evil',
        imdbRating: 5.3
      },
    ];

    expect(JSON.stringify(sortedMovies)).toMatch(JSON.stringify(expected));
  });
});