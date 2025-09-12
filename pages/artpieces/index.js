import ArtPiece from "@/Components/ArtPiece.js";
//import ArtList from "@/Components/ArtList";

export default function artpieces({ data }) {
  return (
    <>
      <header>
        <title>Artpieces</title>
      </header>
      <main>
        <h1>Art Gallery</h1>
        <ul>
          {data.map((image) => (
            <li key={image.slug}>
              <ArtPiece image={image}>
                "{image.name}" by {image.artist}
              </ArtPiece>
            </li>
          ))}
        </ul>

        <nav>
          <a>Spotlight</a>
          <a>Art Pieces</a>
          <a>Favorites</a>
        </nav>
      </main>
    </>
  );
}
