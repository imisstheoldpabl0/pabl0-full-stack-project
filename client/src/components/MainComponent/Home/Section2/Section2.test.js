import React from "react";
import { shallow } from "enzyme";
import Section2 from "./Section2";

describe("Section2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Section2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
