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
    

    render(){
        return(
            <div>
                <h4>{this.state.id}</h4>  
            </div>
        )
    }
}

export default WhiteBox