import { getUserByGithubToken } from "./get-user-by-github-token";
import jwt from "jsonwebtoken";
import faker from "faker";

describe("Testing User model", () => {
	it("should create a new user", () => {
		const githubUserStub = {
			picture: faker.internet.avatar(),
			email: faker.internet.email(),
			user_id: faker.datatype.uuid(),
			name: faker.name.findName(),
		};
		const tokenStub = jwt.sign(githubUserStub, "random secret");

		const user = getUserByGithubToken(tokenStub);

		expect(user?.id).toBe(githubUserStub.user_id);
		expect(user?.name).toBe(githubUserStub.name);
		expect(user?.email).toBe(githubUserStub.email);
		expect(user?.avatar).toBe(githubUserStub.picture);
	});
});
