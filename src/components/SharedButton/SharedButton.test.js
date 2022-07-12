import React from "react";
import { shallow } from "enzyme";
import SharedButton from "./SharedButton";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};

describe("Component -> SharedButton", () => {
  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        btnText: "Text",
        btnColor: "primary",
        btnEmitEvent: () => {},
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "SharedButton");
      expect(wrapper.length).toBe(1);
    });
  });
});
