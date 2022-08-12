import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageButtons from "../PageButtons";

describe("PageButtons", () => {
  test("should buttons from the props", () => {
    render(
      <PageButtons
        pageBtns={[
          '<https://api.github.com/user/69631/repos?per_page=10&page=1>; rel="prev"',
          ' <https://api.github.com/user/69631/repos?per_page=10&page=3>; rel="next"',
          ' <https://api.github.com/user/69631/repos?per_page=10&page=12>; rel="last"',
          ' <https://api.github.com/user/69631/repos?per_page=10&page=1>; rel="first"',
        ]}
        setUrl={jest.fn()}
      />
    );

    const lastButtonElement = screen.getByRole("button", { name: /last/i });
    const firstButtonElement = screen.getByRole("button", { name: /first/i });
    const prevButtonElement = screen.getByRole("button", { name: /prev/i });
    const nextButtonElement = screen.getByRole("button", { name: /next/i });

    expect(lastButtonElement).toBeVisible();
    expect(nextButtonElement).toBeInTheDocument();
    expect(prevButtonElement).toBeInTheDocument();
    expect(firstButtonElement).toBeInTheDocument();
  });
});
