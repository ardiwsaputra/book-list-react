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
    describe("With Items", () => {
      let component;
      beforeEach(() => {
        const props = {
          items: [
            {
              id: "abcdefg",
              title: "Judul Buku",
              author: ["Author"],
              thumbnail: "https://bulma.io/images/placeholders/96x96.png",
              rating: 5,
              is_favorite: true,
            },
          ],
          onRefreshHandler: () => {},
        };
        component = setUp(props);
      });

      it("Should render without errors", () => {
        const wrapper = findByTestAtrr(component, "BooksComponent");
        expect(wrapper.length).toBe(1);
      });
    });
    describe("No Items", () => {
      let component;
      beforeEach(() => {
        const props = {
          items: [],
          onRefreshHandler: () => {},
        };
        component = setUp(props);
      });

      it("Should render without errors", () => {
        const wrapper = findByTestAtrr(component, "NoDataComponent");
        expect(wrapper.length).toBe(1);
      });
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
