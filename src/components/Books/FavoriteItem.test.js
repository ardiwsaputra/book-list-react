import React from "react";
import { shallow } from "enzyme";
import FavoriteItem from "./FavoriteItem";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<FavoriteItem {...props} />);
  return component;
};

describe("Component -> FavoriteItem", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "FavoriteItemComponent");
    expect(wrapper.length).toBe(1);
  });
});
