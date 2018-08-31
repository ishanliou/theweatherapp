import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Input from './component/input'
import Weather from './component/weather'

const API_KEY = "c3abec633ca27fe45a68efb3019866a5"

class App extends Component {
  state = {
    city: '',
    data: {},
    list:[],
    listArray: []
  }

  componentWillMount() {
    console.log('component will mount')
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=brentwood,us&mode=json&appid=${API_KEY}`)
        .then(res => res.json()
        .then(data => this.setState({
          city: data.city.name,
          country: data.city.country,
          data: data,
          list: data.list
        }) 
      ) 
    )

  
  }

  componentDidMount () {
    console.log('component did mount')
    
  }
  
  
  render() {
    if (this.state.list.length > 0) {
      console.log('city: ', this.state.city)
      console.log('list', this.state.list);
      for (let i = 0 ; i < this.state.list.length ; i++) {
        console.log('day', this.state.list[i].weather[0].description)
      }
    }
    //console.log('render')
    //console.log("state: ",this.state)
    //console.log('city: ', this.state.city)
    //console.log('country: ', this.state.country)
    //console.log('day one: ', this.state.dayOne)
    //console.log('day 01: ', this.state.dayOne)
    //console.log(Object.values(this.state.weatherList))
    //const weather = this.state.weatherList.filter((_,i) => i % 4 === 0); 
    // for(let i = 0; i < 10; i++) {
    //   console.log(weather[i][1].dt_txt + " : " + weather[i][1].weather[0].description)
		// 	this.state.list.push(weather[i][1].dt_txt + " : " + weather[i][1].weather[0].description)
		// }
    
    //console.log('result', weather)
    //console.log('result2', this.state.weatherList[0])
    return (
      <div className="App">
     
        {this.state.city}
        <Input />
        <Weather weatherList = {this.state.weatherList}/>
        
      </div>
    )
  }
}

export default App
