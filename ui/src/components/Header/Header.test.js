import React from "react";
import { render, cleanup } from "@testing-library/react";

import { header } from "constants/catalogue";

import Header from "./index";

const props = {
  id: "test",
  date: "February 23, 2020"
};

const { title, todayDate } = header;

describe("Header", () => {
  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(<Header {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(">> title and date are rendered", () => {
    props.date = todayDate;
    const { getByText } = render(<Header {...props} />);
    expect(getByText(title).toExist);
    expect(getByText(todayDate).toExist);
  });
});
