import styled from "styled-components";

export default function LikeButton({ onToggleBookmark, bookmark, image }) {
  return (
    <StyledButton type="button" onClick={() => onToggleBookmark(image.slug)}>
      {bookmark.includes(image.slug) ? "❤️" : "🤍"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  position: absolute;
  top: -20px;
  right: 25px;
  padding: 10px;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 10px #0002;
`;
