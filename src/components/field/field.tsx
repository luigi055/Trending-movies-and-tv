import React from "react";
import { Label } from "./collaborators/label";
import { Input } from "./collaborators/input";
import { FieldContext } from "./field-context";
import { generateID } from "utilities/generate-id";

interface FieldComposition {
	Label: typeof Label;
	Input: typeof Input;
}

const Field: React.FC & FieldComposition = ({ children }) => {
	return (
		<FieldContext.Provider value={generateID()}>
			{children}
		</FieldContext.Provider>
	);
};

Field.Label = Label;
Field.Input = Input;

export default Field;
