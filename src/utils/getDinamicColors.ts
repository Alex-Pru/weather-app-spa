import styles from "../weatherPage/[cityName]/page.module.scss";

export function getDinamicColors(condition: string) {
  switch (condition) {
    case "snowy":
      return styles.snowy;
    case "rainy":
      return styles.rainy;
    case "sunny":
      return styles.sunny;
    case "clear":
      return styles.clear;
    case "cloudy":
      return styles.snowy;
    default:
      return styles.clear;
  }
}
