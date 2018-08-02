import React from "react";
import { configure, mount } from "enzyme";
import WalletAddress from "./WalletAddress";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("WalletAddress", () => {
  it("renders without crashing", () => {
    mount(<WalletAddress />);
  });
});