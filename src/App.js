import './App.css';
import React, {Component} from 'react'
import data from './data'
import Header from './Components/Header'
import WhiteBox from './Components/WhiteBox'
import Buttons from './Components/Buttons';

class App extends Component{
  constructor(){
    super()
    this.state={
      data: data
    }
  }

  DisplayPerson=(person, index)=>{
       if() 
  }

  render(){
    return (
      <div className="App">
        <Header/>
        {this.state.data.map((person, index)=>{
          return(<WhiteBox person={person} key={index}/>)
        })}
        <Buttons/>
      </div>
    );
  }
}

export default App;
