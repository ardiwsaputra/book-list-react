import React from "react";
import { shallow } from "enzyme";
import BookItem from "./BookItem";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<BookItem {...props} />);
  return component;
};

describe("Component -> BookItem", () => {
  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        id: "abcdefg",
        title: "Judul Buku",
        author: ["Author"] ?? [],
        thumbnail: "https://bulma.io/images/placeholders/96x96.png",
        rating: 5,
        is_favorite: true,
        onRefreshHandler: () => {},
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "BookItemComponent");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should not render", () => {
      const wrapper = findByTestAtrr(component, "BookItemComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
