import User from "./user";

describe("Testing User model", () => {
	it("should create a new user", () => {
		const userStub = {
			id: "a1fd33",
			name: "Pedro La Rosa",
			email: "pedro@admin.com",
			avatar: "url",
		};
		const user = new User(userStub);

		expect(user.id).toBe(userStub.id);
		expect(user.name).toBe(userStub.name);
		expect(user.email).toBe(userStub.email);
		expect(user.avatar).toBe(userStub.avatar);
	});
});
