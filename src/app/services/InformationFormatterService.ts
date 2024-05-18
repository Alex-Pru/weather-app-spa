
export class InformationFormatterService{
    constructor(){}

    getResumedCondition(fullCondition: string){
        if(fullCondition.toLowerCase().includes("sun") ){
            return 'sunny'
        }
        else if(fullCondition.toLowerCase().includes("clear")){
            return 'clear'
        }
        else if(fullCondition.toLowerCase().includes("rain") || fullCondition.toLowerCase().includes("drizzle") || fullCondition.toLowerCase().includes("sleet") || fullCondition.toLowerCase().includes("thunder")){
            return 'rainy'
        }
        else if(fullCondition.toLowerCase().includes("cloud") || fullCondition.toLowerCase().includes("overcast") || fullCondition.toLowerCase().includes("mist") || fullCondition.toLowerCase().includes("fog")){
            return 'cloudy'
        }
        else if(fullCondition.toLowerCase().includes("snow") || fullCondition.toLowerCase().includes("blizzard")){
            return 'snowy'
        }
        else{
            return 'clear'
        }
    }

    getIconByTime(hour: number, condition: string){
        if(hour >= 6 && hour <= 18){
            if(condition == 'sunny'){
                return '/sun.svg'
            }
            else if(condition == 'rainy'){
                return '/rain-sun.svg'
            }
            else if(condition == 'cloudy'){
                return '/cloud-sun.svg'
            }
            else if(condition == 'snowy'){
                return '/snow-sun.svg'
            }
            else{
                return '/sun.svg'
            }
        }
        else if(hour > 18 || (hour >= 0 && hour <= 5)){
            if(condition == 'clear'){
                return '/moon.svg'
            }
            else if(condition == 'rainy'){
                return '/rain-moon.svg'
            }
            else if(condition == 'cloudy'){
                return '/cloud-moon.svg'
            }
            else if(condition == 'snowy'){
                return '/snow-moon.svg'
            }
            else{
                return '/moon.svg'
            }
        }
        else{
            return '/moon.svg'
        }
    }
}