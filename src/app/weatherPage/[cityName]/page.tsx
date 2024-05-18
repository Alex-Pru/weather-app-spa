import Link from 'next/link'
import styles from './page.module.scss'
import { CurrentWeatherService } from '@/app/services/CurrentWeatherService'
import { ForecastWeatherService } from '@/app/services/ForecastWeatherService'
import { InformationFormatterService } from '@/app/services/InformationFormatterService'

interface Props{
    params: {cityName: string}
}

export default async function Weather({params}: Props){

    const formattedCityName = params.cityName.toLowerCase()

    const forecastWeatherService = new ForecastWeatherService()
    const currentWeatherService = new CurrentWeatherService()
    const informationFormatterService = new InformationFormatterService()

    const forecastData = await forecastWeatherService.getData(formattedCityName)
    const currentData = await currentWeatherService.getData(formattedCityName)

    const cityWeatherInfo = {
        name: currentData.location.name.toUpperCase(),
        condition: informationFormatterService.getResumedCondition(currentData.current.condition.text),
        currentTemperature: currentData.current.temp_c.toString().slice(0,2),
        maxTemp: forecastData.forecast.forecastday[0].day.maxtemp_c,
        minTemp: forecastData.forecast.forecastday[0].day.mintemp_c,
        sunrise: forecastData.forecast.forecastday[0].astro.sunrise,
        sunset:forecastData.forecast.forecastday[0].astro.sunset,
        humidity: currentData.current.humidity,
        windMps: (currentData.current.wind_mph * 4.47).toFixed(2),
        currentHour: Number(currentData.location.localtime.slice(10, 13)),
        icon: informationFormatterService.getIconByTime(Number(currentData.location.localtime.slice(10, 13).split(":").join("")), informationFormatterService.getResumedCondition(currentData.current.condition.text))
    }

    const timestampWeather = [
        {
            name: 'dawn',
            temperature: getForecastTemp(3),
            condition: informationFormatterService.getResumedCondition(getRawCondition(3)),
            icon: informationFormatterService.getIconByTime(3, informationFormatterService.getResumedCondition(getRawCondition(3)))
        },
        {
            name:'morning',
            temperature: getForecastTemp(9),
            condition: informationFormatterService.getResumedCondition(getRawCondition(9)),
            icon: informationFormatterService.getIconByTime(9, informationFormatterService.getResumedCondition(getRawCondition(9)))
        },
        {
            name: 'afternoon',
            temperature: getForecastTemp(15),
            condition: informationFormatterService.getResumedCondition(getRawCondition(15)),
            icon: informationFormatterService.getIconByTime(15, informationFormatterService.getResumedCondition(getRawCondition(15)))
        },
        {
            name: 'night',
            temperature: getForecastTemp(21),
            condition: informationFormatterService.getResumedCondition(getRawCondition(21)),
            icon: informationFormatterService.getIconByTime(21, informationFormatterService.getResumedCondition(getRawCondition(21)))
        },
    ]

    function getForecastTemp(hour: number){
        return forecastData.forecast.forecastday[0].hour[hour].temp_c
    }

    function getRawCondition(hour: number){
        return forecastData.forecast.forecastday[0].hour[hour].condition.text
    }

    function getDinamicColors(condition: string){
        switch (condition) {
            case 'snowy':
                return styles.snowy
            case 'rainy':
                return styles.rainy
            case 'sunny':
                return styles.sunny
            case 'clear':
                return styles.clear
            case 'cloudy':
                return styles.snowy
            default:
                return styles.clear
        }
    }

    return <main className={`${styles.main} ${getDinamicColors(cityWeatherInfo.condition)}`}>
            <Link href='../' className={styles.returnButton} ><img src='/left-arrow.svg'></img></Link>
        <div className={styles.container}>
                <article className={styles.header}>
                    <h1>
                    {cityWeatherInfo.name}
                    </h1>
                    <p className={styles.subtitle}>{cityWeatherInfo.condition}</p>
                </article>
                <article className={styles.mainVisor}>
                    <div className={styles.mainVisorOrganizer}>
                    <h1>{cityWeatherInfo.currentTemperature}</h1>
                    <p>°C</p>
                    <div className={styles.maxMinContainer}>
                    <div className={styles.maxTemp}><img src="/up-arrow.svg" alt="" /> <span>{cityWeatherInfo.maxTemp}°</span></div>
                    <div className={styles.minTemp}><img src="/down-arrow.svg" alt="" /> <span>{cityWeatherInfo.minTemp}°</span></div>
                    </div>
                    </div>
                </article>
                <img src={cityWeatherInfo.icon} className={`${styles.icon} ${styles.mainIcon}`}></img>
                    <div className={styles.timeStampContainer}>
                        {timestampWeather.map((period) => (
                            <div key={period.name}>
                                <p>{period.name}</p>
                                <img src={period.icon} className={styles.icon}></img>
                                <span>{period.temperature}°C</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.containerFooter}>
                        <div>
                        <p className={styles.lowOpacityText}>wind speed</p>
                        <p>{cityWeatherInfo.windMps}m/s</p>
                        </div>
                        <div>
                        <p className={styles.lowOpacityText}>sunrise</p>
                            <p>{cityWeatherInfo.sunrise}</p>
                        </div>
                        <div>
                        <p className={styles.lowOpacityText}>sunset</p>
                            <p>{cityWeatherInfo.sunset}</p>
                        </div>
                        <div>
                        <p className={styles.lowOpacityText}>humidity</p>
                            <p>{cityWeatherInfo.humidity}%</p>
                        </div>
                    </div>
        </div>
    </main>
}