import {
	Container,
	DesignH2,
	Main,
	PageLayout,
	TitleDecoration,
	Card,
} from "components";
import { useEffect } from "react";
import { ViewSidebar, ViewHeader, ScrollBox } from "views/_shared";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "services/redux/features/movies/actions";
import { selectMovies } from "services/redux/features/movies/selectors";
import { selectIsLoading } from "services/redux/features/loading";
import formatDate from "utilities/format-date";

const Dashboard = () => {
	const dispatch = useDispatch();
	const movies = useSelector(selectMovies);
	const isLoading = useSelector(selectIsLoading);
	console.warn(movies);
	useEffect(() => {
		dispatch(getMovies());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

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
									loading="lazy"
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
