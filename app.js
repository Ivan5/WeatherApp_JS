
//Init UI class
const ui = new UI();
//Init Styorage class
const storage = new Storage();
//get sotrae location data
const weatherLocation = storage.getLocationData();
//Init Weather class
const weather = new Weather(weatherLocation.city,weatherLocation.state);
//Get weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city,state);
  //set location in ls
  storage.setLocationData(city,state);

  //get weather and display
  getWeather();
  //Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
