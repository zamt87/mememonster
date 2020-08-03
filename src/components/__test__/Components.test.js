import React from "react";
import { mount } from "enzyme";
import HomePageLayout from "../HomePageLayout";
import MemeCard from "../MemeCard";
import Root from "../Root";

let wrapped;

it("finds two img elements when two memes are passed in HomePageLayout", () => {
  wrapped = mount(
    <Root>
      <HomePageLayout
        memeDrop={{
          memes: [
            { id: "123", url: "test.com", name: "John" },
            { id: "124", url: "test.com", name: "Bob" },
          ],
        }}
      />
    </Root>
  );
  expect(wrapped.find("img").length).toEqual(2);
  wrapped.unmount();
});

it("shows MemeChard component returns one img element on MemeCard", () => {
  wrapped = mount(
    <Root>
      <MemeCard memeInfo={{ id: "1223", name: "Zamski", url: "hello.com" }} />
    </Root>
  );
  expect(wrapped.find("img").length).toEqual(1);
  wrapped.unmount();
});
