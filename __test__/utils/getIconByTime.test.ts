import { getIconByTime } from "@/utils/getIconByTime";

describe("Should return a icon path based on the time and weather condition", () => {
  // Tests will be divided in daytime tests and nighttime tests, the expected params are: condition and time.
  // eg: getIconByTime(15, "sunny") returns "/sun.svg"
  it("Should return daytime icons", () => {
    const daySunny = getIconByTime(15, "sunny");
    const daySnowy = getIconByTime(8, "snowy");
    // In case the weather and time don't match, the time will be prioritized to determine which icon is displayed.
    const unexpectedTimeSunny = getIconByTime(21, "sunny");

    expect(daySunny).toBe("/sun.svg");
    expect(daySnowy).toBe("/snow-sun.svg");
    expect(unexpectedTimeSunny).toBe("/moon.svg");
  });

  it("Should return nighttime icons", () => {
    const nightClear = getIconByTime(19, "clear");
    const nightCloudy = getIconByTime(3, "cloudy");
    // Same case as before, time and condition don't fit each other.
    const unexpectedTimeClear = getIconByTime(9, "clear");

    expect(nightClear).toBe("/moon.svg");
    expect(nightCloudy).toBe("/cloud-moon.svg");
    expect(unexpectedTimeClear).toBe("/sun.svg");
  });
});
