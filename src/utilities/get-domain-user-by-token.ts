import jwt from "jsonwebtoken";
import User from "models/user";

export const getDomainUserByToken = (token: string): IUser | null => {
	const rawUser = jwt.decode(token) as GitHubRawUser;
	if (!rawUser) return null;

	const user = new User({
		id: rawUser?.user_id,
		name: rawUser?.name,
		email: rawUser?.email,
		avatar: rawUser?.picture,
	});

	return user;
};
