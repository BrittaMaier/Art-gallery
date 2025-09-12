import ArtPiece from "@/Components/ArtPiece.js";
//import ArtList from "@/Components/ArtList";

export default function spotlight({ data }) {
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
        <ArtPiece image={randomArt}>{randomArt.artist}</ArtPiece>

        <nav>
          <a>Spotlight</a>
          <a>Art Pieces</a>
          <a>Favorites</a>
        </nav>
      </main>
    </>
  );
}
