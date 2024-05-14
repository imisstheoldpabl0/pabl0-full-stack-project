import React from "react";
import { shallow } from "enzyme";
import Account from "./Account";

describe("Account", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Account />);
    expect(wrapper).toMatchSnapshot();
  });
});
