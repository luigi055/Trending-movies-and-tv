import {
	Container,
	DesignH2,
	Main,
	PageLayout,
	TitleDecoration,
	Card,
} from "components";
import { useEffect, useState } from "react";
import { ViewSidebar, ViewHeader, ScrollBox } from "views/_shared";

const formatDate = (date: string | number | Date) =>
	new Date(date).toLocaleDateString("en", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

const Dashboard = () => {
	const [movies, setMovies] = useState<any[]>([]);
	useEffect(() => {
		(async () => {
			const { results } = await (
				await fetch(
					`${process.env.REACT_APP_TMDB_API_URI}/trending/movie/day?page=2`,
					{
						headers: {
							"Content-Type": "application/json;charset=utf-8",
							Authorization: `Bearer ${process.env.REACT_APP_TMDB_AUTHORIZATION_TOKEN}`,
						},
					}
				)
			).json();

			setMovies(results);
		})();
	});
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
						{movies.map((movie: any) => (
							<Card key={movie.id}>
								<img
									src={`${process.env.REACT_APP_TMDB_IMAGE_STORAGE_URI}${movie.poster_path}`}
									alt={`poster ${movie.title}`}
								/>
								<h3>{movie.title}</h3>
								<time dateTime={movie.release_date}>
									release date: {formatDate(movie.release_date)}
								</time>
								<h3>Vote average: {movie.vote_average}</h3>
							</Card>
						))}
					</ScrollBox>
				</Main>
			</Container>
		</PageLayout>
	);
};

export default Dashboard;
