import React, {Component} from 'react'

class WhiteBox extends Component{
    constructor(){
        super()
        this.state={
            id: 0,
            name: {},
            country: '',
            employer: '',
            title: '',
            favoriteMovies: []
        }
    }

    SetId=()=>{

    }
    SetName=()=>{
        this.setState({
            name: this.props.data.name
        })
    }
    SetCity=()=>{
        this.setState({
            city: this.props.data.city
        })
    }
    
    render(){
        return(
            <div>
                {/* {this.props.name}
                <h4>From: {this.props.data.city}, {this.props.data.country}</h4> */}
                {/* <h4>Job Title: {this.props.data.title}</h4>
                <h4>Employer: {this.props.data.employer}</h4>
                <h4>Favorite Movies: {this.props.data.favoriteMovies}</h4> */}
            </div>
        )
    }
}

export default WhiteBox