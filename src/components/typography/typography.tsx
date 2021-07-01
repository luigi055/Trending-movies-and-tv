import styled, { css } from "styled-components";

const textStyles = css`
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
`;

export const TitleDecoration = styled.div`
  padding: calc(${({ theme }) => theme.gutter} * 2);
  background: ${({ theme }) => theme.primaryVariantColor};
  color: ${({ theme }) => theme.onPrimaryColor};
`;

export const Heading = styled("h1")`
  font-weight: 700;
  ${textStyles}
  line-height: 1.13;
  color: ${({ theme }) => theme.onPrimaryColor};
`;

export const DesignH1 = styled(Heading)`
  font-size: var(--h1);
  line-height: 1.1;
`;

export const DesignH2 = styled(Heading).attrs({ as: "h2" })`
  font-size: var(--h2);
`;

export const DesignH3 = styled(Heading).attrs({ as: "h3" })`
  font-size: var(--h3);
`;

export const DesignH4 = styled(Heading).attrs({ as: "h4" })`
  font-size: var(--base-size);
`;

export const DesignH5 = styled(Heading).attrs({ as: "h5" })`
  font-size: var(--text-sm);
`;

export const SmallText = styled.small`
  font-size: "0.75rem";
`;
