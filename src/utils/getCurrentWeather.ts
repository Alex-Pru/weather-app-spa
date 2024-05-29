export async function getcurrentWeather(cityName: string) {
  const res = await fetch(`${process.env.APIURLCURRENT}${cityName}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch currentData");
  }

  return res.json();
}
