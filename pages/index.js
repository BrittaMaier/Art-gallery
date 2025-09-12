import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
//import ArtList from "@/Components/ArtList";

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
        <h1>Art Gallery</h1>
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
