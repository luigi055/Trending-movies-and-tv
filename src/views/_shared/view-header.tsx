import { Header, UserCard, DesignH1 } from "components";
import { useSelector } from "react-redux";
import { selectUser } from "services/redux/features/authentication/selectors";

type HeaderProps = {
	title: string;
	user: IUser;
};

const ViewHeader: React.FC<Omit<HeaderProps, "user">> = ({ title }) => {
	const user = useSelector(selectUser);

	return (
		<Header>
			<DesignH1 data-testid="header__title">{title}</DesignH1>
			<UserCard name={user?.name} email={user?.email} avatar={user?.avatar} />
		</Header>
	);
};

export default ViewHeader;
