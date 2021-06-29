import faker from "faker";
import User from "./user";

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
});
