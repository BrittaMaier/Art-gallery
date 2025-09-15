import { styled, css } from "styled-components";
import LikeButton from "./LikeButton";

export default function ArtPiece({
  image,
  children,
  onToggleBookmark,
  bookmark,
}) {
  return (
    <StyledDiv $isFavorite={bookmark.includes(image.slug)}>
      <LikeButton
        onToggleBookmark={onToggleBookmark}
        bookmark={bookmark}
        image={image}
      />
      <StyledLink href={`/artpieces/${image.slug}`}>
        <StyledImage
          src={image.imageSource}
          alt={image.name}
          width={image.width}
          height={image.height}
          $colors={image.colors[0]}
        />
        <StyledCardBody>{children}</StyledCardBody>
      </StyledLink>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  list-style: none;
  //padding: 30px;
  margin: 30px 20px;
  color: #000;
  position: relative;

  ${({ $isFavorite }) =>
    $isFavorite &&
    css`
      color: #ce920b;
    `};
`;

const StyledLink = styled.a`
  display: block;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 550px;
  border: 15px solid ${({ $colors }) => $colors};
  box-shadow: 0px 4px 5px 0px #00000030;
`;

const StyledCardBody = styled.div`
  padding: 15px 0 25px;
  background-color: #fff;

  text-align: center;
`;
