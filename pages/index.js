import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
//import ArtList from "@/Components/ArtList";
import Topbar from "@/Components/Topbar";

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
        <ArtPiece
          image={randomArt}
          bookmark={bookmark}
          onToggleBookmark={onToggleBookmark}
        >
          {randomArt.artist}
        </ArtPiece>

        <Navigation />
      </main>
    </>
  );
}
