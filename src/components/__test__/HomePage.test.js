import React from "react";
import { mount } from "enzyme";
import HomePage from "../HomePage";
import Root from "../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <HomePage />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("renders Loading... when the state is empty", () => {
  expect(wrapped.find("div").length).toEqual(1);
});
