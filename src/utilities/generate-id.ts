import { customAlphabet } from "nanoid/non-secure";

const getId = customAlphabet("abcdefghijklmnopqrst0123456789", 5);

export const generateID = (): string => {
	return getId();
};
