import React from "react";
import { Render } from "@testing-library/react";
import Button from "./index";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
