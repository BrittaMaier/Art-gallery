import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
import Topbar from "@/Components/Topbar";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Spotlight({ data, bookmark, onToggleBookmark }) {
  //const randomArt = getRandomElement(data);
  const [randomArt, setRandomArt] = useState(null);
  useEffect(() => {
    if (data?.length) {
      setRandomArt(data[Math.floor(Math.random() * data.length)]);
    }
  }, [data]);

  if (!randomArt) return null;

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
