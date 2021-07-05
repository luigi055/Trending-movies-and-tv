import { useEffect } from "react";
import { PageTemplate, ScrollBox, ViewCard } from "views/_shared";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "services/redux/features/movies/actions";
import { selectSeries } from "services/redux/features/movies/selectors";

const Settings = () => {
  const dispatch = useDispatch();
  const series = useSelector(selectSeries);

  useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  return (
    <PageTemplate headerTitle="Movies & TV" pageTitle="Trending TV Shows">
      <ScrollBox>
        {series.map((serie) => (
          <ViewCard
            key={serie.id}
            image={serie.posterImage}
            title={serie.title}
            releaseAt={serie.releaseAt}
            rating={serie.rating}
          />
        ))}
      </ScrollBox>
    </PageTemplate>
  );
};

export default Settings;
