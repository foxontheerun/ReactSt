import React from 'react';

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "112cfd1a05458a3531284fb739150748";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div id="main">
        <div className="col-xs-5 title-container">
          <Titles />
        </div>
        <div className="col-xs-7 form-container">
          <Form getWeather={this.getWeather} />
          <Weather 
            temperature={this.state.temperature} 
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}
          />
        </div>
      </div>
  );
  }
};

export default App;