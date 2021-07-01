async function fetchTrendingMoviesByPage(
  page: number,
  type: "tv"
): Promise<RawTMDBSerie[] | undefined>;
async function fetchTrendingMoviesByPage(
  page: number,
  type: "movie"
): Promise<RawTMDBMovie[] | undefined>;
async function fetchTrendingMoviesByPage(
  page: number,
  type: any
): Promise<any> {
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
}

export { fetchTrendingMoviesByPage };
