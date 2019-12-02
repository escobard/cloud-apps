import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header snapshot renders", () => {
  it("should render correctly mode", () => {
    const component = shallow(<Header />);

    expect(component).toMatchSnapshot();
  });
});
