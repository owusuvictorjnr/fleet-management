import { render, screen } from "@testing-library/react";
import Hello from "../components/Hello";

describe("Hello component", () => {
  it("renders the greeting", () => {
    render(<Hello />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
