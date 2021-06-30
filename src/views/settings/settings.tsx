import { Card, DesignH3 } from "components";
import { useEffect } from "react";
import { PageTemplate, ScrollBox } from "views/_shared";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "services/redux/features/movies/actions";
import { selectSeries } from "services/redux/features/movies/selectors";
import formatDate from "utilities/format-date";

const Settings = () => {
	const dispatch = useDispatch();
	const series = useSelector(selectSeries);

	useEffect(() => {
		dispatch(getSeries());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<PageTemplate headerTitle="Settings" pageTitle="Settings">
			<ScrollBox>
				{series.map((serie) => (
					<Card data-testid="movie-card" key={serie.id}>
						<img
							data-testid="movie-card__img"
							src={`${serie.posterImage}`}
							alt={`poster ${serie.title}`}
							loading="lazy"
						/>
						<DesignH3 data-testid="movie-card__title">{serie.title}</DesignH3>
						<time data-testid="movie-card__time" dateTime={serie.releaseAt}>
							release date: {formatDate(serie.releaseAt)}
						</time>
						<DesignH3 data-testid="movie-card__rating" as="p">
							Vote average: {serie.rating}
						</DesignH3>
					</Card>
				))}
			</ScrollBox>
		</PageTemplate>
	);
};

export default Settings;
