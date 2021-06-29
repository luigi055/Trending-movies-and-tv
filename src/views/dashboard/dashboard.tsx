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
				await fetch("https://api.themoviedb.org/3/trending/movie/day?page=2", {
					headers: {
						"Content-Type": "application/json;charset=utf-8",
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzY2Nzg4YmRiZjhiZWY0NTdiOTdkZDg4ZGQxMTQwOSIsInN1YiI6IjU5MWUzMDhiYzNhMzY4Nzk5YjAyNjNkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NltwSu30tDtInqYGND7vukbJ4--mDo3EtA2iMyInqzw",
					},
				})
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
									src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
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
