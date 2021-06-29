export const fetchTrendingMoviesByPage = async (
	page: number,
	type: "tv" | "movie" = "movie"
): Promise<RawTMDBMovie[] | undefined> => {
	try {
		const { results } = await (
			await fetch(
				`${process.env.REACT_APP_TMDB_API_URI}/trending/${type}/day?page=${page}`,
				{
					headers: {
						"Content-Type": "application/json;charset=utf-8",
						Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTHORIZATION_TOKEN}`,
					},
				}
			)
		).json();

		return results;
	} catch (error) {
		alert(`Error trying to fetching trending ${type}`);
	}
};
