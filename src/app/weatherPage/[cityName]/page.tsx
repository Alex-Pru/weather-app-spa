import Link from "next/link";
import styles from "./page.module.scss";
import { DataManagementService } from "@/services/DataManagementService";
import { getDinamicColors } from "@/utils/getDinamicColors";

interface Props {
  params: { cityName: string };
}

export default async function Weather({ params }: Props) {
  const formattedCityName = params.cityName.toLowerCase();
  const dataManagementService = new DataManagementService();
  const cityCurrentWeather = await dataManagementService.getCityCurrentData(
    formattedCityName
  );
  const timestampWeather = await dataManagementService.getCityForecastData(
    formattedCityName
  );

  return (
    <main
      className={`${styles.main} ${getDinamicColors(
        cityCurrentWeather.condition
      )}`}
    >
      <Link href="../" className={styles.returnButton}>
        <img className={styles.returnButton} src="/left-arrow.svg" alt="" />
      </Link>
      <div className={styles.container}>
        <article className={styles.header}>
          <h1>{cityCurrentWeather.name}</h1>
          <p className={styles.subtitle}>{cityCurrentWeather.condition}</p>
        </article>
        <article className={styles.mainVisor}>
          <div className={styles.mainVisorOrganizer}>
            <h1>{cityCurrentWeather.currentTemperature}</h1>
            <p>°C</p>
            <div className={styles.maxMinContainer}>
              <div className={styles.maxTemp}>
                <img src="/up-arrow.svg" alt="" />{" "}
                <span>{cityCurrentWeather.maxTemp}°</span>
              </div>
              <div className={styles.minTemp}>
                <img src="/down-arrow.svg" alt="" />{" "}
                <span>{cityCurrentWeather.minTemp}°</span>
              </div>
            </div>
          </div>
        </article>
        <img
          alt=""
          src={cityCurrentWeather.icon}
          className={`${styles.icon} ${styles.mainIcon}`}
        />
        <div className={styles.timeStampContainer}>
          {timestampWeather.map((period) => (
            <div key={period.name}>
              <p>{period.name}</p>
              <img alt="" src={period.icon} className={styles.icon}></img>
              <span>{period.temperature}°C</span>
            </div>
          ))}
        </div>
        <div className={styles.containerFooter}>
          <div>
            <p className={styles.lowOpacityText}>wind speed</p>
            <p>{cityCurrentWeather.windMps}m/s</p>
          </div>
          <div>
            <p className={styles.lowOpacityText}>sunrise</p>
            <p>{cityCurrentWeather.sunrise}</p>
          </div>
          <div>
            <p className={styles.lowOpacityText}>sunset</p>
            <p>{cityCurrentWeather.sunset}</p>
          </div>
          <div>
            <p className={styles.lowOpacityText}>humidity</p>
            <p>{cityCurrentWeather.humidity}%</p>
          </div>
        </div>
      </div>
    </main>
  );
}
