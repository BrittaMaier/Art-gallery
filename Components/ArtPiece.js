import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styled from "styled-components";
import css from "styled-jsx/css";

export default function ArtPiece({
  image,
  children,
  onToggleBookmark,
  bookmark,
}) {
  return (
    <>
      <StyledDiv $isFavorite={bookmark.includes(image.slug) ? "true" : ""}>
        <Link href={`/artpieces/${image.slug}`}>
          <Image
            src={image.imageSource}
            alt={image.name}
            width={140}
            height={140}
          />
          <p>{children}</p>
        </Link>
        <button type="button" onClick={() => onToggleBookmark(image.slug)}>
          {bookmark.includes(image.slug) ? "❤️" : "🤍"}
        </button>
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  ${({ $isFavorite }) =>
    $isFavorite &&
    css`
      background-color: red;
    `}
`;
