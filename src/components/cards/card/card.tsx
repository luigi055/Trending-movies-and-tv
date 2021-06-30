import React from "react";
import { DesignH3, DesignH2 } from "components/typography";
import styled from "styled-components";

const Image = styled.img`
	width: 100%;
	height: auto;
`;
const Title = styled(DesignH2).attrs({ as: "h2" })``;
const SubTitle = styled(DesignH3).attrs({ as: "h3" })``;
const Description = styled.p``;

interface CardComposition {
	Image: typeof Image;
	Title: typeof Title;
	SubTitle: typeof SubTitle;
	Description: typeof Description;
}

const CardStyled = styled.div`
	background: ${({ theme }) => theme.backgroundColor};
	box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.1);
	color: ${({ theme }) => theme.onBackgroundColor};
	margin: ${({ theme }) => theme.gutter} auto;
	width: 220px;
`;

const Card: React.FC & CardComposition = ({ children, ...rest }) => (
	<CardStyled {...rest}>{children}</CardStyled>
);

Card.Title = Title;
Card.Image = Image;
Card.SubTitle = SubTitle;
Card.Description = Description;

export default Card;
