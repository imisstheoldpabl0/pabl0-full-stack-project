import React from "react";
import { shallow } from "enzyme";
import Candlestick from "./Candlestick";

describe("Candlestick", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Candlestick />);
    expect(wrapper).toMatchSnapshot();
  });
});
