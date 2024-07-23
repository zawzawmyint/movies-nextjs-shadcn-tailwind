export const getMoviesList = async (query = "", page = 1, category = "") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_MOVIE_API_KEY,
    },
    catch: "no-store",
  };

  let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  if (query) {
    // search
    url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  } else if (category && category !== "all") {
    // category except all optoins
    url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`;
  }

  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return response;
};
export const getMovieDetails = async (id, param = "") => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_MOVIE_API_KEY,
    },
    cache: "no-store",
  };

  const url = !param
    ? `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    : `https://api.themoviedb.org/3/movie/${id}/${param}?language=en-US&page=1`;

  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return response;
};
export const getMovieGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + process.env.NEXT_PUBLIC_MOVIE_API_KEY,
    },
    cache: "no-store",
  };

  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const response = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });

  return response;
};
