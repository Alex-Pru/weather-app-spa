import styles from "@/app/weatherPage/[cityName]/page.module.scss";
import { getDinamicColors } from "@/utils/getDinamicColors";

describe("Should return a CSS styled theme for the Main tag based on current weather", () => {
  it("Should return the snowy theme", () => {
    // Since there is no theme for the cloudy condition in the requirements, snowy theme is being used for both.
    const snowyC = getDinamicColors("snowy");
    const cloudyC = getDinamicColors("cloudy");

    expect(cloudyC).toBe(styles.snowy);
    expect(snowyC).toBe(styles.snowy);
  });

  it("Should return the rainy theme", () => {
    const rainyC = getDinamicColors("rainy");

    expect(rainyC).toBe(styles.rainy);
  });

  it("Should return the sunny theme", () => {
    const sunnyC = getDinamicColors("sunny");

    expect(sunnyC).toBe(styles.sunny);
  });

  it("Should return the clear theme", () => {
    const clearC = getDinamicColors("clear");

    expect(clearC).toBe(styles.clear);
  });
});
