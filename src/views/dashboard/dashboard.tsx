import { useEffect } from "react";
import { ScrollBox, PageTemplate, ViewCard } from "views/_shared";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "services/redux/features/movies/actions";
import { selectMovies } from "services/redux/features/movies/selectors";

const Dashboard = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <PageTemplate headerTitle="Dashboard" pageTitle="Secret Dashboard">
      <ScrollBox>
        {movies.map((movie) => (
          <ViewCard
            key={movie.id}
            image={movie.posterImage}
            title={movie.title}
            releaseAt={movie.releaseAt}
            rating={movie.rating}
          />
        ))}
      </ScrollBox>
    </PageTemplate>
  );
};

export default Dashboard;
