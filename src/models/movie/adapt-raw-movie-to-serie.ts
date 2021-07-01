import Movie from "./movie";

const adaptRawTMDBToSerie = (rawMovie: RawTMDBSerie): IMovie =>
  new Movie({
    id: rawMovie.id,
    rating: rawMovie.vote_average,
    posterImage: `${process.env.REACT_APP_TMDB_IMAGE_STORAGE_URI}/${rawMovie.poster_path}`,
    title: rawMovie.name,
    releaseAt: rawMovie.first_air_date,
  });

export default adaptRawTMDBToSerie;
