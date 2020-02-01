import axios from 'axios';

const URL = "http://www.omdbapi.com/";
const APIKEY = '8a73c412'

const fetchInfo = async (id) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        i: id,
        apikey: APIKEY
      },
    });
    if (data) {
      return data;
    }
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return null;
  }
};

const fetchMovies = async (searchTerm) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        s: searchTerm,
        apikey: APIKEY
      },
    });
    if (data) {
      return data.Search;
    }
    return null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    return null;
  }
};

export { fetchInfo, fetchMovies };