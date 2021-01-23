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
      data: data,
      value: 0,
    }  
  }
  
  NextButton=()=>{
    let value = this.state.value+1
    if(value<25){
      this.setState({
        value: value
      })
    } else {
      this.setState({
        value: value-1
      })
    }
  }  
  
  PreviousButton=()=>{
    let value = this.state.value-1
    if(value>-1){
      this.setState({
        value: value
      })
    } else {
      this.setState({
        value: value+1
      })
    }
  }

  render(){
    console.log(this.state.name)
    return (
      <div className="App">
        <div className="Header">
        <Header />
        </div>
        <div className="WhiteBox">
        <WhiteBox data={this.state.data[this.state.value]}/>
        </div>
        <div>
        <Buttons NextButton={this.NextButton} PreviousButton={this.PreviousButton}/>
        </div>
      </div>
    );
  }
}

export default App;
