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
import { getSeries } from "services/redux/features/movies/actions";
import { selectSeries } from "services/redux/features/movies/selectors";
import { selectIsLoading } from "services/redux/features/loading";
import formatDate from "utilities/format-date";

const Settings = () => {
	const dispatch = useDispatch();
	const series = useSelector(selectSeries);
	const isLoading = useSelector(selectIsLoading);

	useEffect(() => {
		dispatch(getSeries());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading) return <h1>Loading...</h1>;

	return (
		<PageLayout>
			<ViewHeader title="Settings" />
			<Container>
				<ViewSidebar />
				<Main>
					<TitleDecoration>
						<DesignH2 data-testid="settings__title">Settings</DesignH2>
					</TitleDecoration>
					<ScrollBox>
						{series.map((serie) => (
							<Card key={serie.id}>
								<img
									src={`${serie.posterImage}`}
									alt={`poster ${serie.title}`}
									loading="lazy"
								/>
								<h3>{serie.title}</h3>
								<time dateTime={serie.releaseAt}>
									release date: {formatDate(serie.releaseAt)}
								</time>
								<h3>Vote average: {serie.rating}</h3>
							</Card>
						))}
					</ScrollBox>
				</Main>
			</Container>
		</PageLayout>
	);
};

export default Settings;
