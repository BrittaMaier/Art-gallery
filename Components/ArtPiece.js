import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import css from "styled-jsx/css";
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

  position: relative;
  ${({ $isFavorite }) =>
    $isFavorite &&
    css`
      //box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.2);
    `};
`;

const StyledLink = styled.a`
  display: block;
`;

const StyledImage = styled.img`
  width: 100%;
  border: 15px solid ${({ $colors }) => $colors};
`;

const StyledCardBody = styled.div`
  padding: 15px 0 25px;
  background-color: #fff;
  color: #000;
  text-align: center;
`;
