import React from "react";
import { shallow } from "enzyme";
import Footer from "./index";

const props = {
  id: "test",
  count: 0,
  open: false
};

describe("Footer snapshot renders", () => {
  it("should render correctly mode", () => {
    const component = shallow(<Footer {...props} />);

    expect(component).toMatchSnapshot();
  });
});
