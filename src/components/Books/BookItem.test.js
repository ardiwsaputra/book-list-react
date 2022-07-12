import React from "react";
import { mount } from "enzyme";
import BookItem from "./BookItem";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = mount(<BookItem {...props} />);
  return component;
};

describe("Component -> BookItem", () => {
  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        id: "abcdefg",
        title: "Judul Buku",
        author: ["Author", "Author 2"],
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

    it("Should render author more than one", () => {
      const wrapper = findByTestAtrr(component, "AuthorMoreThanOne");
      expect(wrapper.text()).toEqual("Authors: Author, Author 2");
    });

    it("Should render FavoriteButton without errors", () => {
      const wrapper = findByTestAtrr(component, "FavoriteButton");
      expect(wrapper.length).toBe(1);
    });

    it("Should change Favorite Button Click", () => {
      const wrapper = findByTestAtrr(component, "FavoriteButton");
      wrapper.simulate("click");
      expect(wrapper.text()).toEqual("- Favorite");
      wrapper.simulate("click");
      expect(wrapper.text()).toEqual("+ Favorite");
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
