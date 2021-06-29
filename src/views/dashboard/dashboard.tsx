import {
	Container,
	DesignH2,
	Main,
	PageLayout,
	TitleDecoration,
	Card,
} from "components";
import { useEffect, useState } from "react";
import { fetchTrendingMoviesByPage } from "services/movies";
import { ViewSidebar, ViewHeader, ScrollBox } from "views/_shared";

import Movie from "models/movie";

const formatDate = (date: string | number | Date) =>
	new Date(date).toLocaleDateString("en", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

const Dashboard = () => {
	const [movies, setMovies] = useState<IMovie[]>([]);
	useEffect(() => {
		(async () => {
			try {
				const rawMovies = await fetchTrendingMoviesByPage(1);

				const movies = rawMovies?.map(
					(rawMovie) =>
						new Movie({
							id: rawMovie.id,
							rating: rawMovie.vote_average,
							posterImage: `${process.env.REACT_APP_TMDB_IMAGE_STORAGE_URI}/${rawMovie.poster_path}`,
							title: rawMovie.title,
							releaseAt: rawMovie.release_date,
						})
				);

				setMovies(movies!);
			} catch (error) {
				alert("Error trying to retrieving movies");
			}
		})();
	}, []);
	return (
		<PageLayout>
			<ViewHeader title="Dashboard" />
			<Container>
				<ViewSidebar />
				<Main>
					<TitleDecoration>
						<DesignH2 data-testid="dashboard__title">Secret Dashboard</DesignH2>
					</TitleDecoration>
					<ScrollBox>
						{movies.map((movie) => (
							<Card key={movie.id}>
								<img
									src={`${movie.posterImage}`}
									alt={`poster ${movie.title}`}
								/>
								<h3>{movie.title}</h3>
								<time dateTime={movie.releaseAt}>
									release date: {formatDate(movie.releaseAt)}
								</time>
								<h3>Vote average: {movie.rating}</h3>
							</Card>
						))}
					</ScrollBox>
				</Main>
			</Container>
		</PageLayout>
	);
};

export default Dashboard;
