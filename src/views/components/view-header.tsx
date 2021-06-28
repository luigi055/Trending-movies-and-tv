import { Header } from "components";
import { useSelector } from "react-redux";
import { selectUser } from "services/redux/features/authentication/selectors";

const ViewHeader: React.FC<Omit<HeaderProps, "user">> = ({ title }) => {
	const user = useSelector(selectUser);

	return <Header title={title} user={user!} />;
};

export default ViewHeader;
