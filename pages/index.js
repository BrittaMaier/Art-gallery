import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
import Topbar from "@/Components/Topbar";
import styled from "styled-components";

export default function spotlight({ data, bookmark, onToggleBookmark }) {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomArt = getRandomElement(data);

  return (
    <>
      <header>
        <title>Spotlight</title>
      </header>
      <main>
        <Topbar>Art Gallery</Topbar>
        <SpotlightContainer>
          <ArtPiece
            image={randomArt}
            bookmark={bookmark}
            onToggleBookmark={onToggleBookmark}
          >
            {randomArt.artist}
          </ArtPiece>
        </SpotlightContainer>

        <Navigation />
      </main>
    </>
  );
}

const SpotlightContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
