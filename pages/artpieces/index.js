import ArtPiece from "@/Components/ArtPiece";
import Navigation from "@/Components/Navigation";
import ArtList from "@/Components/ArtList";
import styled from "styled-components";
import Topbar from "@/Components/Topbar";

export default function artpieces({ data, bookmark, onToggleBookmark }) {
  return (
    <>
      <header>
        <title>Artpieces</title>
      </header>
      <main>
        <Topbar>Art Gallery</Topbar>
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
