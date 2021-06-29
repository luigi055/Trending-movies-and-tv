import faker from "faker";
import jwt from "jsonwebtoken";
import getUserByGithubToken from "./get-user-by-github-token";
import User from ".";

describe("Testing User model", () => {
	it("should create a new user", () => {
		const userStub = {
			id: faker.datatype.uuid(),
			avatar: faker.internet.avatar(),
			email: faker.internet.email(),
			name: faker.name.findName(),
		};
		const user = new User(userStub);

		expect(user.id).toBe(userStub.id);
		expect(user.name).toBe(userStub.name);
		expect(user.email).toBe(userStub.email);
		expect(user.avatar).toBe(userStub.avatar);
	});

	it("should create a new user from rawGithubUser", () => {
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
