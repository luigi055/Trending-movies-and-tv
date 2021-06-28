import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { setStore } from "services/redux";
import App from "./app";

describe("Test application core", () => {
	it("should render properly", () => {
		const { container } = render(
			<Provider store={setStore()}>
				<App />
			</Provider>
		);

		expect(container).toBeInTheDocument();
	});
});
