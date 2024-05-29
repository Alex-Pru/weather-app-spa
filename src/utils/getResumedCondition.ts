export function getResumedCondition(fullCondition: string) {
  if (fullCondition.toLowerCase().includes("sun")) {
    return "sunny";
  } else if (fullCondition.toLowerCase().includes("clear")) {
    return "clear";
  } else if (
    fullCondition.toLowerCase().includes("rain") ||
    fullCondition.toLowerCase().includes("drizzle") ||
    fullCondition.toLowerCase().includes("sleet") ||
    fullCondition.toLowerCase().includes("thunder")
  ) {
    return "rainy";
  } else if (
    fullCondition.toLowerCase().includes("cloud") ||
    fullCondition.toLowerCase().includes("overcast") ||
    fullCondition.toLowerCase().includes("mist") ||
    fullCondition.toLowerCase().includes("fog")
  ) {
    return "cloudy";
  } else if (
    fullCondition.toLowerCase().includes("snow") ||
    fullCondition.toLowerCase().includes("blizzard")
  ) {
    return "snowy";
  } else {
    return "clear";
  }
}
