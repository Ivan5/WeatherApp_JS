//Init Weather class
const weather = new Weather('Boston','MA');
//Init UI class
const ui = new UI();
//weather.changeLocation('Miami','FL');
//Get weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);
function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
