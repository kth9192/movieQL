let movies = [
  { id: 0, name: "star wars", score: 1 },
  { id: 1, name: "avangers", score: 4 },
  { id: 2, name: "logan", score: 3 }
];

export const getMovies = () => movies;

export const getMovieById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
