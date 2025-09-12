import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
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
                &quot;{image.name}&quot; by {image.artist}
              </ArtPiece>
            </li>
          ))}
        </ul>

        <Navigation />
      </main>
    </>
  );
}
