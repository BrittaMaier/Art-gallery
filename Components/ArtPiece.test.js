import { render, screen } from "@testing-library/react";
import ArtPiece from "./ArtPiece";
import React from "react";

const artObject = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: {
    height: 2432,
    width: 1920,
    type: "jpg",
  },
};

/*vi.mock("./LikeButton", () => ({
  default: ({ onToggleBookmark, image }) => (
    <button aria-label="like" onClick={() => onToggleBookmark(image)}>
      ♥
    </button>
  ),
}));*/
/*test("renders loading when no image", () => {
  render(
    <ArtPiece
      image={null}
      bookmark={[]}
      onToggleBookmark={() => {
        console.log("Hi");
      }}
    />
  );
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});*/

test("renders an artpiece", () => {
  render(
    <ArtPiece
      bookmark={[]}
      image={artObject}
      onToggleBookmark={
        /*vi.fn()*/ () => {
          console.log("HI");
        }
      }
    >
      Steve Johnson
    </ArtPiece>
  );
  const likebutton = screen.getByRole("button", {
    name: /🤍/i,
  });
  expect(likebutton).toBeInTheDocument();

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", `/artpieces/${artObject.slug}`);
  expect(link).toBeInTheDocument();
  const img = screen.getByRole("img", {
    name: `${artObject.name}`,
  });
  expect(img).toBeInTheDocument();
  //Testing all attributes to have the right values
  /* expect(img).toHaveAttribute("src", artObject.imageSource);
  expect(img).toHaveAttribute("width", artObject.width.toString());
  expect(img).toHaveAttribute("height", artObject.height.toString());*/
});
/*test("applies favorite styling when slug is bookmarked", () => {
  const { container } = render(
    <ArtPiece
      image={artObject}
      bookmark={["starry-night"]}
      onToggleBookmark={vi.fn()}
    />
  );

  // The root wrapper is the first div (StyledDiv). We can assert style applied by styled-components.
  // styled-components injects styles into className; RTL’s toHaveStyle checks computed styles.
  const root = container.firstChild;
  expect(root).toHaveStyle({ color: "#ce920b" });
});*/
