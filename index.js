import { getWeather, getWeatherForecast, weatherIMG, fullCountryName, getTimesForecast} from "./weatherDetect.js"

let btnForm = document.querySelector("#SearchForm button")
btnForm.addEventListener("click", async function(e){
    e.preventDefault()    

    let form = document.querySelector("#SearchForm")
    let city = form.search.value

    const currentWeather = await getWeather(city)
    currentWeather.weatherIMG = weatherIMG(currentWeather.weather[0].main)
    currentWeather.sys.country = await fullCountryName(city)
    currentWeather.forecast = await getWeatherForecast(city)
    currentWeather.forecast.todayTimes = await getTimesForecast(city)
    console.log(currentWeather)
    showInfo(currentWeather)


    
    
    new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
})





function showInfo(data) {
    const infoElement = document.querySelector("#info")
    infoElement.innerHTML ='<div class="temp-block">'
    +'<h2 id="info-name">' + data.name+','+'<span id="info-country">' + data.sys.country + '</span>'+ '</h2>'+'<img src="'+data.weatherIMG+'" alt="icon">'+'<h3 id="info-temp">'+ Math.round(data.main.temp)+'°с'+'</h3>'+'<h3 id="info-desc">' + data.weather[0].main + '</h3>'+'</div>'
    +'<div class="forecast-block">'
    +'<div class ="forecast-list">'+'Mon '+'<img src="'+data.forecast.Mon.img+'" alt="icon">'+Math.round(data.forecast.Mon.temp)+'°с'+'</div>'
    +'<div class ="forecast-list">'+'Tue '+'<img src="'+data.forecast.Tue.img+'" alt="icon">'+Math.round(data.forecast.Tue.temp)+'°с'+'</div>'
    +'<div class ="forecast-list">'+'Wed '+'<img src="'+data.forecast.Wed.img+'" alt="icon">'+Math.round(data.forecast.Wed.temp)+'°с'+'</div>'
    +'<div class ="forecast-list">'+'Thu '+'<img src="'+data.forecast.Thu.img+'" alt="icon">'+Math.round(data.forecast.Thu.temp)+'°с'+'</div>'
    +'<div class ="forecast-list">'+'Fri '+'<img src="'+data.forecast.Fri.img+'" alt="icon">'+Math.round(data.forecast.Fri.temp)+'°с'+'</div>'
    +'<div class ="forecast-list">'+'Sat '+'<img src="'+data.forecast.Sat.img+'" alt="icon">'+Math.round(data.forecast.Sat.temp)+'°с'+'</div>'
    +'<div class ="forecast-list">'+'Sun '+'<img src="'+data.forecast.Sun.img+'" alt="icon">'+Math.round(data.forecast.Sun.temp)+'°с'+'</div>'
    +'</div>'
    +'<div class ="weatherOnTime-block mySwiper">'
    +'<div class ="swiper-wrapper">'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[0].formattedDate+'<h3>'+data.forecast.todayTimes[0].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[0].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[0].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[1].formattedDate+'<h3>'+data.forecast.todayTimes[1].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[1].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[1].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[2].formattedDate+'<h3>'+data.forecast.todayTimes[2].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[2].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[2].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[3].formattedDate+'<h3>'+data.forecast.todayTimes[3].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[3].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[3].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[4].formattedDate+'<h3>'+data.forecast.todayTimes[4].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[4].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[4].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[5].formattedDate+'<h3>'+data.forecast.todayTimes[5].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[5].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[5].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[6].formattedDate+'<h3>'+data.forecast.todayTimes[6].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[6].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[6].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[7].formattedDate+'<h3>'+data.forecast.todayTimes[7].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[7].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[7].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[8].formattedDate+'<h3>'+data.forecast.todayTimes[8].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[8].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[8].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[9].formattedDate+'<h3>'+data.forecast.todayTimes[9].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[9].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[9].temp)+'°с'+'</span>'+'</div>'
    +'<div class="swiper-slide">'+'<span class="slideDate">'+data.forecast.todayTimes[10].formattedDate+'<h3>'+data.forecast.todayTimes[10].formattedTime+'</h3>'+'</span>'+'<img src="'+data.forecast.todayTimes[10].img+'" alt="img">'+'<span class="slideTemp">'+Math.round(data.forecast.todayTimes[10].temp)+'°с'+'</span>'+'</div>'
    +'</div>'
    +'<div class="swiper-pagination"></div>'
    +'</div>'

    const menuElement = document.querySelector("#menu")
    menuElement.innerHTML='<div class="menu-block">'
    +'<div class ="menu-Images">'
    +'<img src="images/home.svg" alt="home">'
    +'<div class = "nightMode">'+'<img src="images/nightScreen.svg" alt="night-screen">'+'</div>'
    +'<img src="images/settings.svg" alt="settings"'
    +'</div>'
    +'</div>'

}


