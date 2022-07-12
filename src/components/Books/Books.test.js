import React from "react";
import { shallow } from "enzyme";
import Books from "./Books";
import { findByTestAtrr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Books {...props} />);
  return component;
};

describe("Component -> Books", () => {
  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = [
        {
          id: "abcdefg",
          title: "Judul Buku",
          author: ["Author"],
          thumbnail: "https://bulma.io/images/placeholders/96x96.png",
          rating: 5,
          is_favorite: true,
        },
      ];
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "BooksComponent");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should no data component render", () => {
      const wrapper = findByTestAtrr(component, "BooksComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
