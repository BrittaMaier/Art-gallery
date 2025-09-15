import { useState, useEffect } from "react";
import GlobalStyle from "../styles";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);
  /*const initialBookmark = data?.map((image) => ({
    ...image,
    isFavorite: false,
  }));*/
  const [bookmark, setBookmark] = useLocalStorageState("bookmark", {
    defaultValue: [],
  });

  useEffect(() => {
    console.log("Bookmarks changed:", bookmark);
  }, [bookmark]);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  function handleToggleBookmark(toggleSlug) {
    setBookmark((prevState) =>
      prevState.includes(toggleSlug)
        ? prevState.filter((slug) => slug !== toggleSlug)
        : [...prevState, toggleSlug]
    );
  }

  console.log("Data", data);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        bookmark={bookmark}
        onToggleBookmark={handleToggleBookmark}
      />
    </>
  );
}
