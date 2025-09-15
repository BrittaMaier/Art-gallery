import { useRouter } from "next/router";
import Navigation from "@/Components/Navigation";
import BackButton from "@/Components/BackButton";
import styled from "styled-components";

export default function ArtDetail({ data, bookmark, onToggleBookmark }) {
  //grab slug
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return null;
  }

  const image = data.find((item) => item.slug === slug);
  if (!image) return <p>Not found</p>;
  return (
    <main>
      <BackButton href={`/artpieces`} />

      <ImageWrapper>
        <StyledDetailImage
          src={image.imageSource}
          alt={image.name}
          width={image.width}
          height={image.height}
        />
        <StyledLikeButton
          type="button"
          onClick={() => onToggleBookmark(image.slug)}
        >
          {bookmark.includes(image.slug) ? "❤️" : "🤍"}
        </StyledLikeButton>
      </ImageWrapper>
      <StyledDetailArtist>{image.artist}:</StyledDetailArtist>
      <StyledDetailTitle>&quot;{image.name}&quot;</StyledDetailTitle>
      <StyledDetailInfo>
        {image.year} – {image.genre}
      </StyledDetailInfo>

      <Navigation />
    </main>
  );
}

const StyledDetailImage = styled.img`
  width: 100%;
`;

const StyledDetailArtist = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;
const StyledDetailTitle = styled.h1`
  font-size: 1.7rem;
  font-style: italic;
  text-align: center;
  padding: 0 20px;
`;

const StyledDetailInfo = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledLikeButton = styled.button`
  position: absolute;
  bottom: -20px;
  right: 25px;
  background-color: #fff;
  border: none;

  padding: 10px;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0px 2px 10px #0002;
`;
