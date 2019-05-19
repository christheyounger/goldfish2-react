import React from "react";
import render from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = render.create(<App />);
  expect(wrapper.toJSON()).toMatchSnapshot();
});
