import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
import ArtList from "@/Components/ArtList";
import styled from "styled-components";

export default function artpieces({ data, bookmark, onToggleBookmark }) {
  return (
    <>
      <header>
        <title>Artpieces</title>
      </header>
      <main>
        <h1>Art Gallery</h1>
        <ArtList>
          {data.map((image) => (
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
