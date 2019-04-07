import axios from 'axios';

class TransportLayer {
  fetchWeather(latitude, longitude) {
    const url = `${process.env.REACT_APP_API_URL}/weather/${latitude}/${longitude}`;

    return axios.get(url);
  }
}

export default TransportLayer;