export const getMoviesList = async (query, page, status = "") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.MOVIE_API_KEY,
    },
    catch: "no-store",
  };

  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  if (query) {
    // search
    url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  } else if (status) {
    // suggessions
    url = `https://api.themoviedb.org/3/movie/${status}?language=en-US&page=1`;
  }

  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return response;
};
export const getMovieDetails = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.MOVIE_API_KEY,
    },
    cache: "no-store",
  };

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return response;
};
