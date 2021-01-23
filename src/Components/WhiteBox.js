import React, {Component} from 'react'

class WhiteBox extends Component{
    render(){
        const {name, id, city, country, title, employer, favoriteMovies} = this.props.data
        return(
            <div>
                <h1 className="PersonName">{name.first} {name.last}</h1>
                <h2 className="Counter">{id}/25</h2>
                <h4>From: {city}, {country}</h4>
                <h4>Job Title: {title}</h4>
                <h4>Employer: {employer}</h4>
                <h4>Favorite Movies: {favoriteMovies}</h4>
            </div>
        )
    }
}

export default WhiteBox