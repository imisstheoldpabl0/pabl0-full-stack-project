import React from "react";
import { shallow } from "enzyme";
import Use from "./Use";

describe("Use", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Use />);
    expect(wrapper).toMatchSnapshot();
  });
});
