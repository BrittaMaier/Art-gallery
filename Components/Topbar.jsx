import styled from "styled-components";

export default function Topbar({ children }) {
  return <StyledTopbar>{children}</StyledTopbar>;
}

const StyledTopbar = styled.h1`
  background-color: #ffffff;
  box-shadow: 0px 0px 7px 0px #00000055;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 10px;
  text-align: center;
  z-index: 200;
  width: 100%;
  font-size: 1.65rem;
`;
