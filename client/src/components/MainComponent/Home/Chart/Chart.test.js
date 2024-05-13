import React from "react";
import { shallow } from "enzyme";
import Chart from "./Chart";

describe("Chart", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper).toMatchSnapshot();
  });
});
