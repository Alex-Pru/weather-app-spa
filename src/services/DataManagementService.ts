import { getcurrentWeather } from "@/utils/getCurrentWeather";
import { getIconByTime } from "@/utils/getIconByTime";
import { getResumedCondition } from "@/utils/getResumedCondition";
import { getWeatherForecast } from "@/utils/getWeatherForecast";

export class DataManagementService {
  constructor() {}

  async getCityCurrentData(city: string) {
    const forecastData = await getWeatherForecast(city);
    const currentData = await getcurrentWeather(city);

    const cityWeatherInfo = {
      name: currentData.location.name.toUpperCase(),
      condition: getResumedCondition(currentData.current.condition.text),
      currentTemperature: currentData.current.temp_c.toString().slice(0, 2),
      maxTemp: forecastData.forecast.forecastday[0].day.maxtemp_c,
      minTemp: forecastData.forecast.forecastday[0].day.mintemp_c,
      sunrise: forecastData.forecast.forecastday[0].astro.sunrise,
      sunset: forecastData.forecast.forecastday[0].astro.sunset,
      humidity: currentData.current.humidity,
      windMps: (currentData.current.wind_mph * 4.47).toFixed(2),
      currentHour: Number(currentData.location.localtime.slice(10, 13)),
      icon: getIconByTime(
        Number(
          currentData.location.localtime.slice(10, 13).split(":").join("")
        ),
        getResumedCondition(currentData.current.condition.text)
      ),
    };

    return cityWeatherInfo;
  }

  async getCityForecastData(city: string) {
    const forecastData = await getWeatherForecast(city);

    function getForecastTemp(hour: number) {
      return forecastData.forecast.forecastday[0].hour[hour].temp_c;
    }

    function getRawCondition(hour: number) {
      return forecastData.forecast.forecastday[0].hour[hour].condition.text;
    }

    const timestampWeather = [
      {
        name: "dawn",
        temperature: getForecastTemp(3),
        condition: getResumedCondition(getRawCondition(3)),
        icon: getIconByTime(3, getResumedCondition(getRawCondition(3))),
      },
      {
        name: "morning",
        temperature: getForecastTemp(9),
        condition: getResumedCondition(getRawCondition(9)),
        icon: getIconByTime(9, getResumedCondition(getRawCondition(9))),
      },
      {
        name: "afternoon",
        temperature: getForecastTemp(15),
        condition: getResumedCondition(getRawCondition(15)),
        icon: getIconByTime(15, getResumedCondition(getRawCondition(15))),
      },
      {
        name: "night",
        temperature: getForecastTemp(21),
        condition: getResumedCondition(getRawCondition(21)),
        icon: getIconByTime(21, getResumedCondition(getRawCondition(21))),
      },
    ];

    return timestampWeather;
  }
}
