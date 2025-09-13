import styled from "styled-components";

export default function BackButton({ href }) {
  return <StyledBackButton href={href}>← back</StyledBackButton>;
}

const StyledBackButton = styled.a`
  background-color: #ffffff;
  box-shadow: 0px 0px 7px 0px #00000055;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 15px 10px;
  z-index: 200;
  width: 100%;
`;
