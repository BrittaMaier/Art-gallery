import ArtPiece from "@/Components/ArtPiece";
import Navigation from "@/Components/Navigation";
import ArtList from "@/Components/ArtList";
import styled from "styled-components";
import Topbar from "@/Components/Topbar";

export default function Favorites({ data, bookmark, onToggleBookmark }) {
  return (
    <>
      <header>
        <title>Artpieces</title>
      </header>
      <main>
        <Topbar>Art Gallery</Topbar>
        <ArtList>
          {bookmark.length === 0 && (
            <StyledH2>Please select a favorite art piece ...</StyledH2>
          )}
          {data
            .filter((image) => bookmark.includes(image.slug))
            .map((image) => (
              <ArtPiece
                key={image.slug}
                image={image}
                bookmark={bookmark}
                onToggleBookmark={onToggleBookmark}
              >
                <ArtTitle>&quot;{image.name}&quot;</ArtTitle>
                by {image.artist}
              </ArtPiece>
            ))}
        </ArtList>

        <Navigation />
      </main>
    </>
  );
}

const ArtTitle = styled.h3`
  margin: 0 0 10px;
  font-style: italic;
`;
const StyledH2 = styled.h2`
  text-align: center;
  padding: 50px 0px;
`;
