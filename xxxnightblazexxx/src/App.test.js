import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test("renders the home page hero", () => {
  renderAt("/");
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Kyle Akridge/i);
});

test.each([
  ["/career", /career/i],
  ["/education", /education/i],
  ["/projects", /portfolio/i],
])("renders the %s page", (path, heading) => {
  renderAt(path);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(heading);
});
