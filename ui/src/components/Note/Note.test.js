import React from "react";
import { render, cleanup } from "@testing-library/react";
import Note from "./index";

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

  it(">> should display notes data", () => {
    const { data: { subject, note, date} } = props;
    const { getByText } = render(<Note {...props} />);
    expect(getByText(subject).toExist);
    expect(getByText(note).toExist);
    expect(getByText(date).toExist);
  });

  it(">> should hide date when no date is given", () => {
    props.data.date = undefined;
    const { container } = render(<Note {...props} />);
    expect(container.querySelector(".date")).toEqual(null);
  });


});
