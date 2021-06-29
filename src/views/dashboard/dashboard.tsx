import {
	Container,
	DesignH2,
	DesignH3,
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

	useEffect(() => {
		dispatch(getMovies());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) return <h1 data-testid="loading">Loading...</h1>;

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
							<Card data-testid="movie-card" key={movie.id}>
								<img
									data-testid="movie-card__img"
									src={`${movie.posterImage}`}
									alt={`poster ${movie.title}`}
									loading="lazy"
								/>
								<DesignH3 data-testid="movie-card__title">
									{movie.title}
								</DesignH3>
								<time data-testid="movie-card__time" dateTime={movie.releaseAt}>
									release date: {formatDate(movie.releaseAt)}
								</time>
								<DesignH3 data-testid="movie-card__rating" as="p">
									Vote average: {movie.rating}
								</DesignH3>
							</Card>
						))}
					</ScrollBox>
				</Main>
			</Container>
		</PageLayout>
	);
};

export default Dashboard;
