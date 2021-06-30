import { fetchTrendingMoviesByPage } from "./movies";

describe("Testing the movies service failed", () => {
	beforeEach(() => {
		window.alert = jest.fn();
		window.fetch = () => new Promise((_resolve, reject) => reject());
	});

	it("should notify when the TMDB service failed when fetching movies", async () => {
		await fetchTrendingMoviesByPage(1, "movie");

		expect(window.alert).toHaveBeenCalledWith(
			"Error trying to fetching trending movie"
		);
	});

	it("should notify when the TMDB service failed when fetching series", async () => {
		await fetchTrendingMoviesByPage(1, "tv");

		expect(window.alert).toHaveBeenCalledWith(
			"Error trying to fetching trending tv"
		);
	});
});
