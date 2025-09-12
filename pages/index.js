import ArtPiece from "@/Components/ArtPiece.js";
//import ArtList from "@/Components/ArtList";

export default function HomePage({ data }) {
  return (
    <>
      <header>
        <title>Art Gallery</title>
      </header>
      <main>
        <h1>Art Gallery</h1>
        <ul>
          {data.map((image) => (
            <li key={image.slug}>
              <ArtPiece image={image} />
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
