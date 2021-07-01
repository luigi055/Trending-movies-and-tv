import { render, screen } from "@testing-library/react";
import Settings from "./settings";
import { getSeries } from "services/redux/features/movies/actions";
import { logout } from "services/redux/features/authentication/actions";
import { ConnectedComponent } from "utilities/test-utils/wrappers";
import { generateMovies } from "utilities/test-utils/stubs";
import { DASHBOARD, SETTINGS } from "routes/routes-config";
import { setStore } from "services/redux";
import Movie from "models/movie";
import formatDate from "utilities/format-date";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
}));
jest.mock("services/redux/features/movies/actions");
jest.mock("services/redux/features/authentication/actions");

const signOutButtonTestId = "signout__btn";

const mockedMovies = new Movie({
  id: "agargas",
  rating: 9.1,
  posterImage: "/path",
  title: "name",
  releaseAt: "2020-01-13",
});

describe("Testing the Settings page", () => {
  beforeEach(() => {
    render(
      <ConnectedComponent
        store={setStore(generateMovies({ series: [mockedMovies] }))}
      >
        <Settings />
      </ConnectedComponent>
    );
  });

  it("should show the settings title", () => {
    const { getByTestId } = screen;

    const dashboardTitle = getByTestId("template__title");

    expect(dashboardTitle).toHaveTextContent("Settings");
  });

  it("should show the correct header title", () => {
    const { getByTestId } = screen;

    const dashboardTitle = getByTestId("header__title");

    expect(dashboardTitle).toHaveTextContent("Settings");
  });

  it("should links point to the correct URI", () => {
    const { getByTestId } = screen;

    const sidebarLinkToDashboard = getByTestId("sidebar__nav-link__dashboard");
    const sidebarLinkToSettings = getByTestId("sidebar__nav-link__settings");

    expect(sidebarLinkToDashboard).toHaveAttribute("href", DASHBOARD);
    expect(sidebarLinkToSettings).toHaveAttribute("href", SETTINGS);
  });

  it("should call getSeries action once", () => {
    expect(getSeries).toHaveBeenCalledTimes(1);
  });

  it("should show the logout button with github button", () => {
    const { getByTestId } = screen;
    const signOutButton = getByTestId(signOutButtonTestId);

    expect(signOutButton).toBeInTheDocument();
  });

  it("should call the logout action when the user clicks in the github button", () => {
    const { getByTestId } = screen;
    const signOutButton = getByTestId(signOutButtonTestId);

    signOutButton.click();

    expect(logout).toHaveBeenCalledTimes(1);
  });

  it("should show the serie data", () => {
    const { getAllByTestId } = screen;

    const movieCards = getAllByTestId("movie-card");
    const title = movieCards[0].querySelector(
      "[data-testid='movie-card__title']"
    );
    const img = movieCards[0].querySelector("[data-testid='movie-card__img']");
    const dateTime = movieCards[0].querySelector(
      "[data-testid='movie-card__time']"
    );
    const rating = movieCards[0].querySelector(
      "[data-testid='movie-card__rating']"
    );

    expect(title).toHaveTextContent(mockedMovies.title);
    expect((img as HTMLImageElement).src).toContain(mockedMovies.posterImage);
    expect(dateTime?.textContent).toContain(formatDate(mockedMovies.releaseAt));
    expect(rating?.textContent).toContain(mockedMovies.rating);
  });

  it("should display the loading icon when there is no series to show", () => {
    render(
      <ConnectedComponent store={setStore(generateMovies({ isLoading: true }))}>
        <Settings />
      </ConnectedComponent>
    );

    const { getByTestId } = screen;

    expect(getByTestId("loading")).toBeInTheDocument();
  });
});
