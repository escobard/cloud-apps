import React from "react";
import { shallow } from "enzyme";
import Note from "./index";

describe("Form snapshot renders", () => {
  it("should render makeDonation form and fields correctly", () => {
    const component = shallow(<Note  />);
    
    expect(component).toMatchSnapshot();
  });
});
