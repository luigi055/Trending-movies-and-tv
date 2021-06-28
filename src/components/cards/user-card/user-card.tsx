import { UserCardStyled, TextBox, Avatar } from "./styled";

export const UserCard: React.FC<UserCardProps> = ({
	name = "",
	email = "",
	avatar = "",
}) => {
	return (
		<UserCardStyled>
			<TextBox>
				<h4>{name}</h4>
				<small style={{ fontSize: "0.75rem" }}>{email}</small>
			</TextBox>
			<Avatar src={avatar} alt={`${name}'s avatar`} />
		</UserCardStyled>
	);
};
