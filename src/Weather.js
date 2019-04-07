import React from "react";
import { inject } from "mobx-react";
import { Icon } from "antd";


class Weather extends React.Component {
  render () {
    return <div>
      Weather currently: {this.props.isLoading ? <Icon type="loading" /> : `${this.props.weather.currently.temperature} °C`}
    </div>
  }
}

export default inject(stores => ({
  weather: stores.rootStore.weatherStore.weather,
  isLoading: stores.rootStore.weatherStore.isLoading,
}))(Weather);