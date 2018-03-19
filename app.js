//Init Weather class
const weather = new Weather('Boston','MA');
//weather.changeLocation('Miami','FL');
//Get weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);
function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}
