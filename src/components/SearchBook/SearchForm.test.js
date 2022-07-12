import React from "react";
import { shallow } from "enzyme";
import SearchForm from "./SearchForm";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<SearchForm {...props} />);
  return component;
};

describe("Component -> SearchForm", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "SearchFormComponent");
    expect(wrapper.length).toBe(1);
  });
});
