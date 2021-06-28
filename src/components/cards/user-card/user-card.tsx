import { UserCardStyled, TextBox, Avatar } from "./styled";

const UserCard: React.FC<UserCardProps> = ({
	name = "",
	email = "",
	avatar = "",
}) => {
	return (
		<UserCardStyled>
			<TextBox>
				<h4>{name}</h4>
				<small>{email}</small>
			</TextBox>
			<Avatar src={avatar} alt={`${name}'s avatar`} />
		</UserCardStyled>
	);
};

export default UserCard;
