import fetchMock from "fetch-mock";
import { fetchTrendingMoviesByPage } from "./movies";
process.env.REACT_APP_TMDB_API_URI = "https://api.themoviedb.org/3";

const rawTMDB = {
	id: "k2m3",
	poster_path: "/image.jpg",
	release_date: "2020-13-01",
	vote_average: 7.5,
};

const rawMovie = { ...rawTMDB, title: "fake title" };
const rawSerie = { ...rawTMDB, name: "fake name" };

fetchMock.mock("https://api.themoviedb.org/3/trending/movie/day?page=1", 200, {
	response: { results: [rawMovie] },
});
fetchMock.mock("https://api.themoviedb.org/3/trending/tv/day?page=1", 200, {
	response: { results: [rawSerie] },
});

describe("Testing the movies service", () => {
	it("should fetch movies data from the TMDB service and return it", async () => {
		const movies = await fetchTrendingMoviesByPage(1, "movie");

		expect(movies![0]).toEqual(rawMovie);
	});

	it("should fetch series data from the TMDB service and return it", async () => {
		const series = await fetchTrendingMoviesByPage(1, "tv");

		expect(series![0]).toEqual(rawSerie);
	});
});
