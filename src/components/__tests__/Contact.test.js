import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

test("Should load contact us component", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
