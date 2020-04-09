import React from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';

const apikey = process.env.REACT_APP_API_KEY;
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    }
  }

  componentDidMount() {
    this.getWeatherData();
  }

  // async getWeatherData() {
  //   try {
  //     const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=&units=imperial');
      
  //     this.setState({ weather: response.data });
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  getWeatherData() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=' + apikey + '&units=imperial')
    .then(response => {
      // console.log(response.data);
      this.setState({ weather: response.data });
    }).catch(error => console.error(error));
  }

  nullcheck() {
    if(this.state.weather === null) {
      return <h2>no information</h2>
    } else {
      return this.state.weather.list.map(listItem => <Weather dt={ listItem.dt_txt } />);
      // this.state.weather.list.map(listItem => console.log(listItem.dt_txt));
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.nullcheck()
          }
        </header>
      </div>
    );
  }
}

export default App;
