import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import Footer from "components/Footer";

const props = {
  id: "test",
  count: 0,
  open: false
};

describe("Footer snapshot renders", () => {
  afterAll(() => {
    cleanup();
  });

  it("should render correctly mode", () => {
    const { container } = render(<Footer {...props} />);
    act(() => {});

    expect(container).toMatchSnapshot();
  });
});
