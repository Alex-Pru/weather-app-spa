export class ForecastWeatherService{
    constructor(){}

    getData = async function getWeatherInfo(cityName:string) {
        const res = await fetch(`${process.env.APIURLFORECAST}${cityName}`,  {next: {revalidate: 10}})

        if(!res.ok){
            throw new Error('Failed to fetch currentData')
        }

        return res.json()
    }
}