import { DesignH3, Card } from "components";
import { useEffect } from "react";
import { ScrollBox, PageTemplate } from "views/_shared";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "services/redux/features/movies/actions";
import { selectMovies } from "services/redux/features/movies/selectors";
import formatDate from "utilities/format-date";

const Dashboard = () => {
	const dispatch = useDispatch();
	const movies = useSelector(selectMovies);

	useEffect(() => {
		dispatch(getMovies());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageTemplate headerTitle="Dashboard" pageTitle="Secret Dashboard">
			<ScrollBox>
				{movies.map((movie) => (
					<Card data-testid="movie-card" key={movie.id}>
						<img
							data-testid="movie-card__img"
							src={`${movie.posterImage}`}
							alt={`poster ${movie.title}`}
							loading="lazy"
						/>
						<DesignH3 data-testid="movie-card__title">{movie.title}</DesignH3>
						<time data-testid="movie-card__time" dateTime={movie.releaseAt}>
							release date: {formatDate(movie.releaseAt)}
						</time>
						<DesignH3 data-testid="movie-card__rating" as="p">
							Vote average: {movie.rating}
						</DesignH3>
					</Card>
				))}
			</ScrollBox>
		</PageTemplate>
	);
};

export default Dashboard;
