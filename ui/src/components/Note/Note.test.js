import React from "react";
import { render, cleanup } from "@testing-library/react";
import Note from "./index";

import { errors } from "constants/catalog";

const props = {
  id: "test",
  data: {
    subject: "Test subject",
    note: "Test note",
    date: "02/23/20, 11:46 PM"
  }
};

describe("Note", () => {
  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(<Note {...props} />);
    expect(container).toMatchSnapshot();
  });
});
