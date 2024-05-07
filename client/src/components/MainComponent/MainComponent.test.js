import React from "react";
import { shallow } from "enzyme";
import MainComponent from "./MainComponent";

describe("Main", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MainComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
