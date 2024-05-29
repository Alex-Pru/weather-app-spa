export async function getWeatherForecast(cityName: string) {
  const res = await fetch(`${process.env.APIURLFORECAST}${cityName}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch current data");
  }

  return res.json();
}
