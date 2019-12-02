import React from "react";
import { shallow } from "enzyme";
import Modal from "./index";

describe("Modal snapshot renders", () => {
    it("should render correctly mode", () => {
        const component = shallow(<Modal />);

        expect(component).toMatchSnapshot();
    });
});
