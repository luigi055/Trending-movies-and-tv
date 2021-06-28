import Header from "components/stateful/header";
import jwt from "jsonwebtoken";
import { getCookie } from "services/cookies";

const Dashboard = () => {
	const user = jwt.decode(getCookie("access_token")) as IUser;
	console.warn(user);

	return (
		<div>
			<Header />
			<h1>Dashboard</h1>
			<main>{user.email}</main>
		</div>
	);
};

export default Dashboard;
