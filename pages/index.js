import useSWR from "swr";
import ArtPiece from "@/Components/ArtPiece";
import ArtList from "@/Components/ArtList";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  console.log("Data", data);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <header>
        <title>Art Gallery</title>
      </header>
      <main>
        <h1>Art Gallery</h1>
        <ArtList>
          {data?.map((image) => (
            <li key={image.slug}>
              <ArtPiece image={image} />
              <h2>{image.name}</h2>
              <p>{image.artist}</p>
            </li>
          ))}
        </ArtList>

        <nav>
          <a>Spotlight</a>
          <a>Art Pieces</a>
          <a>Favorites</a>
        </nav>
      </main>
    </>
  );
}
