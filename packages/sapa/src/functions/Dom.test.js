import { expect, test } from "vitest";

import { VNodeToElement } from "./DomUtil";

test("check to make element tree", () => {
  const A = VNodeToElement({
    tag: "div",
    props: {
      class: "yellow",
      key: "test",
    },
    children: [
      {
        tag: "span",
        props: { key: "test" },
        children: [{ tag: "span", props: { key: "test2" } }],
      },
      "<a href='https://www.naver.com'>a</a>",
      0,
    ],
  });

  // console.log(A);

  expect(A.tagName).toBe("DIV");
  expect(A.attr("class")).toBe("yellow");
  expect(A.childLength()).toBe(3);
  expect(A.childNodes[0].childNodes[0].attr("key")).toBe("test2");
  expect(A.childNodes[1].attr("href")).toBe("https://www.naver.com");
});
