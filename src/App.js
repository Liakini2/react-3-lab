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
      value: 1
    }
  }

  DisplayPerson=()=>{
    let data = this.state.data
    console.log('This function is firing')
    if(data.id===this.state.value){
      this.setState({
        data: data.indexOf(data.id)
      }) 
    }
  }

  NextButton=()=>{
    const value = this.state.value
    this.setState({
      value: value + 1
    })
    this.DisplayPerson()
}  

  PreviousButton=()=>{
    const value = this.state.value
    this.setState({
      value: value -1
    })
    this.DisplayPerson()
  }

  render(){
    return (
      <div className="App">
        <Header/>
        {JSON.stringify(this.state.data)}
        <WhiteBox 
        // data={this.state.data}
        />
        <Buttons NextButton={this.NextButton} PreviousButton={this.PreviousButton}/>
      </div>
    );
  }
}

export default App;
