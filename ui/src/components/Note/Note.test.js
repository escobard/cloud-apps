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

  it(">> should display notes data and circular icon", () => {
    const {
      data: { subject, note, date }
    } = props;
    const { getByText, container } = render(<Note {...props} />);
    expect(getByText(subject).toExist);
    expect(getByText(note).toExist);
    expect(getByText(date).toExist);
    expect(container.querySelector(".sticky.note").toExist);
  });

  it(">> should hide date when no date is given", () => {
    props.data.date = undefined;
    const { container } = render(<Note {...props} />);
    expect(container.querySelector(".date")).toEqual(null);
  });

  it(">> should show different icon if icon is defined", () => {
    props.data.icon = "some icon";
    const { container } = render(<Note {...props} />);
    expect(container.querySelector(".sticky.note")).toEqual(null);
    expect(container.querySelector(".some.icon").toExist);
  });
});
