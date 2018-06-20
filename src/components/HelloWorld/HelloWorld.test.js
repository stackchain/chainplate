import React from "react";
import { configure, mount } from "enzyme";
import HelloWorld from "./HelloWorld";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("HelloWorld", () => {
  it("renders without crashing", () => {
    mount(<HelloWorld />);
  });
});