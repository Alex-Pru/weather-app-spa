import { getResumedCondition } from "@/utils/getResumedCondition";

describe("Should format the weather condition passed into a resumed one", () => {
  // the following variables consists of the raw condition name + C (C = Condition)
  it("Should return sunny condition", () => {
    const sunnyC = getResumedCondition("Sunny");

    expect(sunnyC).toBe("sunny");
  });

  it("Should return clear condition", () => {
    const clearC = getResumedCondition("Clear");

    expect(clearC).toBe("clear");
  });

  it("Should return the rainy condition", () => {
    const rainC = getResumedCondition("Rain");
    const drizzleC = getResumedCondition("Drizzle");
    const thunderC = getResumedCondition("Thunder");

    expect(rainC).toBe("rainy");
    expect(drizzleC).toBe("rainy");
    expect(thunderC).toBe("rainy");
  });

  it("Should return the cloudy condition", () => {
    const cloudC = getResumedCondition("Cloud");
    const overCastC = getResumedCondition("Overcast");

    expect(cloudC).toBe("cloudy");
    expect(overCastC).toBe("cloudy");
  });

  it("Should return the snowy condition", () => {
    const snowC = getResumedCondition("snow");
    const blizzardC = getResumedCondition("blizzard");

    expect(snowC).toBe("snowy");
    expect(blizzardC).toBe("snowy");
  });

  /*The api provides a list with all the weather conditions available in it, but, if a new condition is added, I don't want it to break the app.
    That's why there is such an embracing else in this function. */
  it("Should return the default value", () => {
    const unexpectedC = getResumedCondition("Unexpected");
    const anythingC = getResumedCondition("Anything works here");

    expect(unexpectedC).toBe("clear");
    expect(anythingC).toBe("clear");
  });
});
