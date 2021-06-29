import Movie from "./movie";

const adaptRawMovieToMovie = (rawMovie: RawTMDBMovie): IMovie =>
	new Movie({
		id: rawMovie.id,
		rating: rawMovie.vote_average,
		posterImage: `${process.env.REACT_APP_TMDB_IMAGE_STORAGE_URI}/${rawMovie.poster_path}`,
		title: rawMovie.title,
		releaseAt: rawMovie.release_date,
	});

export default adaptRawMovieToMovie;
