import { render, screen } from "@testing-library/react";
import About from "../../src/pages/about";
import "@testing-library/jest-dom";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);

    const heading = screen.getByRole("heading", {
      name: /About me/i,
    });

    // 必ず落ちるテストサンプル
    expect(true).toBe(false);

    expect(heading).toBeInTheDocument();
  });
});
