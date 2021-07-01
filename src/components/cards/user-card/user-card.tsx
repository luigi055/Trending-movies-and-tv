import { UserCardStyled, TextBox, Avatar } from "./styled";
import { DesignH4, SmallText } from "../../typography";

export const UserCard: React.FC<UserCardProps> = ({
  name = "",
  email = "",
  avatar = "",
}) => {
  return (
    <UserCardStyled>
      <TextBox>
        <DesignH4>{name}</DesignH4>
        <SmallText>{email}</SmallText>
      </TextBox>
      <Avatar src={avatar} alt={`${name}'s avatar`} />
    </UserCardStyled>
  );
};
