export function getIconByTime(hour: number, condition: string) {
  if (hour >= 6 && hour <= 18) {
    switch (condition) {
      case "sunny":
        return "/sun.svg";
      case "rainy":
        return "/rain-sun.svg";
      case "cloudy":
        return "/cloud-sun.svg";
      case "snowy":
        return "/snow-sun.svg";
      default:
        return "/sun.svg";
    }
  } else if (hour > 18 || (hour >= 0 && hour <= 5)) {
    switch (condition) {
      case "clear":
        return "/moon.svg";
      case "rainy":
        return "/rain-moon.svg";
      case "cloudy":
        return "/cloud-moon.svg";
      case "snowy":
        return "/snow-moon.svg";
      default:
        return "/moon.svg";
    }
  } else {
    return "/moon.svg";
  }
}
