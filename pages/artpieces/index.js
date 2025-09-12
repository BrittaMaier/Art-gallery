import ArtPiece from "@/Components/ArtPiece.js";
import Navigation from "@/Components/Navigation";
import ArtList from "@/Components/ArtList";

export default function artpieces({ data, bookmark, onToggleBookmark }) {
  return (
    <>
      <header>
        <title>Artpieces</title>
      </header>
      <main>
        <h1>Art Gallery</h1>
        <ul>
          {data.map((image) => (
            <ArtPiece
              key={image.slug}
              image={image}
              bookmark={bookmark}
              onToggleBookmark={onToggleBookmark}
            >
              &quot;{image.name}&quot; by {image.artist}
            </ArtPiece>
          ))}
        </ul>

        <Navigation />
      </main>
    </>
  );
}
