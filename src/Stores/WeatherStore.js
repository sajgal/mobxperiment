import { observable, decorate, action } from 'mobx';

class WeatherStore {
  transportLayer;
  isLoading = true;
  weather;

  constructor(transportLayer) {
    this.transportLayer = transportLayer;
    this.loadWeather();
  }

  loadWeather() {
    this.isLoading = true;
    navigator.geolocation.getCurrentPosition(position => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      this.transportLayer
        .fetchWeather(latitude.toFixed(4), longitude.toFixed(4))
        .then(response => {
          this.updateWeather(response.data);
        });
    });
  }

  updateWeather(weatherData) {
    this.weather = weatherData;
    this.isLoading = false;
  }
}

export default decorate(WeatherStore, {
  isLoading: observable,
  weather: observable,
  updateWeather: action,
});