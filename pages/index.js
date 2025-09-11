import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL);
  console.log("Data", data);

  if (!data) {
    return <h1>Loading...</h1>;
  }

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
          <li>
            <img />
            <h2>Art Title</h2>
            <p>Artist Name</p>
          </li>
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
