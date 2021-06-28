import { render, screen } from "@testing-library/react";
import Field from "./field";

jest.mock("utilities/generate-id");

describe("Field", () => {
	describe("Label", () => {
		it("applies unique ID to htmlFor attribute", () => {
			render(
				<Field>
					<Field.Label>Label</Field.Label>
				</Field>
			);

			expect(screen.getByText("Label")).toHaveAttribute("for", "unique-id");
		});
	});

	describe("Input", () => {
		it("applies unique ID to id attribute", () => {
			render(
				<Field>
					<Field.Label>Input</Field.Label>
					<Field.Input />
				</Field>
			);

			expect(screen.getByLabelText("Input")).toHaveAttribute("id", "unique-id");
		});
	});
});
