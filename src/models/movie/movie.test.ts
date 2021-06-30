import adaptRawMovieToSerie from "./adapt-raw-movie-to-serie";
import adaptRawMovieToMovie from "./adapt-raw-movie-to-movie";
import faker from "faker";

describe("Testing Movie model", () => {
	it("should create a new movie from a rawSerie", () => {
		const rawSeries = {
			id: faker.datatype.uuid(),
			poster_path: faker.datatype.string(),
			first_air_date: faker.datatype.string(),
			vote_average: faker.datatype.float(),
			name: faker.name.findName(),
		};

		const movie = adaptRawMovieToSerie(rawSeries);

		expect(movie.id).toBe(rawSeries.id);
		expect(movie.title).toBe(rawSeries.name);
		expect(movie.posterImage).toContain(rawSeries.poster_path);
		expect(movie.releaseAt).toBe(rawSeries.first_air_date);
		expect(movie.rating).toBe(rawSeries.vote_average);
	});

	it("should create a new movie from a rawMovie", () => {
		const rawMovie = {
			id: faker.datatype.uuid(),
			poster_path: faker.datatype.string(),
			release_date: faker.datatype.string(),
			vote_average: faker.datatype.float(),
			title: faker.name.findName(),
		};

		const movie = adaptRawMovieToMovie(rawMovie);

		expect(movie.id).toBe(rawMovie.id);
		expect(movie.title).toBe(rawMovie.title);
		expect(movie.posterImage).toContain(rawMovie.poster_path);
		expect(movie.releaseAt).toBe(rawMovie.release_date);
		expect(movie.rating).toBe(rawMovie.vote_average);
	});
});
