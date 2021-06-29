import { render } from "@testing-library/react";
import { ConnectedComponent } from "utilities/test-utils/wrappers";
import App from "./app";

describe("Test application core", () => {
	it("should render properly", () => {
		const { container } = render(
			<ConnectedComponent>
				<App />
			</ConnectedComponent>
		);

		expect(container).toBeInTheDocument();
	});
});
