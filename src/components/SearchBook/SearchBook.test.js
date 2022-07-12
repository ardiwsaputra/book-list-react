import React from "react";
import { shallow } from "enzyme";
import SearchBook from "./SearchBook";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<SearchBook {...props} />);
  return component;
};

describe("Component -> SearchBook", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "SearchBookComponent");
    expect(wrapper.length).toBe(1);
  });
});
