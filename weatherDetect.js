const apiKey = "c02f46cbe560f279ac3ccaf77109f122"

export async function getWeather(city){
        try{
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json()
        return data
        } catch(error){
            console.error("Error when receiving weather data: "+error)
        }
    }
    
    export async function getTimesForecast(city){
        try{
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            const output = {}
            let i = 0;
            data.list.forEach( element => {
                const data = new Date(element.dt_txt)
                const formattedDate = data.toLocaleDateString('en', {day: 'numeric', month: 'short'})
                const formattedTime = data.toLocaleTimeString('en', {hour:'2-digit', minute:'2-digit'})
                const desc =  element.weather[0].main
                const img = weatherIMG(desc)
                const temp = element.main.temp
                output[i] = {formattedTime, formattedDate,temp, desc, img}
                if(i<12){
                    i++;
                }
            });
            return output
        }catch(error){
            console.error("Error when receiving weather forecast data: " + error);
        }
    }



    export async function getWeatherForecast(city) {
        try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
    
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const forecast = {};
    
            daysOfWeek.forEach(day => {
                forecast[day] = { temp: -Infinity, desc: '', img: '' };
            });
    
            data.list.forEach(item => {
                const date = new Date(item.dt_txt);
                const dayOfWeek = date.toLocaleDateString('en', { weekday: 'short' });
                const temp = item.main.temp;
                const desc = item.weather[0].main;
                const img = weatherIMG(item.weather[0].main);
    
                if (temp > forecast[dayOfWeek].temp) {
                    forecast[dayOfWeek] = { temp, desc, img };
                }
            });
    
            let lastKnown = null;
            daysOfWeek.forEach(day => {
                if (forecast[day].temp === -Infinity) {
                    if (lastKnown) {
                        forecast[day] = { ...lastKnown };
                    }
                } else {
                    lastKnown = { ...forecast[day] };
                }
            });
    
            return forecast;
        } catch (error) {
            console.error("Error when receiving weather forecast data: " + error);
        }
    }
    
    

    export function weatherIMG(stable) {
        switch(stable){
            case 'Clouds':
                return "images/Clouds.svg"
                break
            case 'Rain':
                return "images/Rain.svg"
                break
            case 'Clear':
                return "images/Clear.svg"
                break
            case 'Mint':
                return "images/Mint.svg"
            default:
                return "asdasd"
        }
    }

    export async function fullCountryName(city){
        try{
            const res = await fetch("country_codes.json")
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const curWeather = await getWeather(city)
        const countryCodes = await res.json()
        const countryName = countryCodes[curWeather.sys.country]
        return countryName
        }catch(error){
            console.error("Error when receiving country_codes data: " + error);
        }
    }
    

    