import React from "react";
import { DesignH4, DesignH2 } from "components/typography";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Title = styled(DesignH2).attrs({ as: "h2" })`
  padding: 10px 10px 5px;
`;
const SubTitle = styled(DesignH4).attrs({ as: "h3" })`
  padding: 0 10px 5px;
`;
const Description = styled.p`
  padding: 0 10px 5px;
`;

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
  padding-bottom: 10px;
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
