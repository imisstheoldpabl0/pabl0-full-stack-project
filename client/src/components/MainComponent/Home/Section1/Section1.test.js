import React from "react";
import { shallow } from "enzyme";
import Section1 from "./Section1";

describe("Section1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Section1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
