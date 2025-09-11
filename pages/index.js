import useSWR from "swr";
//import ArtPiece from "./Components/ArtPiece";
import Image from "next/image";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);

  /*if (!data) {
    return <h1>Loading...</h1>;
  }*/
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
        <ul>
          {data?.map((image) => (
            <li key={image.slug}>
              {/*<ArtPiece image={image} />*/}
              <Image
                src={image?.imageSource}
                alt={image.name}
                width={140}
                height={140}
              />
              <h2>{image.name}</h2>
              <p>{image.artist}</p>
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
