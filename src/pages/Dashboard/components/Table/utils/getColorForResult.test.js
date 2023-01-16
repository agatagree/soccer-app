import { getColorForResult } from "./getColorForResult";

describe("getColorFromResult", () => {
  test("returns orange when value1 is equal to value2", () => {
    expect(getColorForResult(4, 4)).toBe("var(--main-orange)");
  });
});
