import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href={"/"}>Spotlight</StyledLink>
      <StyledLink href={"/artpieces"}>Art Pieces</StyledLink>
      <StyledLink href={""}>Favorites</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  background-color: #eae6e6;
  display: flex;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  bottom: 0;
`;

const StyledLink = styled.a`
  padding: 15px;
  flex-grow: 1;
  text-align: center;
  text-decoration: none;
`;
