import { formatText } from "./formatText";

describe("formatText", () => {
  test("replaces all underscores with spaces", () => {
    expect(formatText("corner_kick")).toBe("corner kick");
    expect(formatText("corner_kick_kick")).toBe("corner kick kick");
  });

  test("returns original text if no underscores", () => {
    expect(formatText("corner kick")).toBe("corner kick");
    expect(formatText("goal")).toBe("goal");
  });
});
