import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";

test("renders a navigation bar with a link to the spotlight page", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", {
    name: /spotlight/i,
  });
  expect(spotlightLink).toBeInTheDocument();
});
test("renders a navigation bar with a link to the art pieces page", () => {
  render(<Navigation />);
  const artPiecesLink = screen.getByRole("link", {
    name: /art pieces/i,
  });
  expect(artPiecesLink).toBeInTheDocument();
});
test("renders a navigation bar with a link to the favorites page", () => {
  render(<Navigation />);
  const favoritesLink = screen.getByRole("link", {
    name: /favorites/i,
  });
  //const favoritesLink = screen.toHaveAttribute("href", "/favorites");
  expect(favoritesLink).toBeInTheDocument();
});
