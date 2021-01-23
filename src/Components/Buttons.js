import React, {Component} from 'react'

class Buttons extends Component{
    render(){
        return(
            <div>
                <button
                onClick={this.props.NextButton}>
                    Previous
                </button>
                <button
                onClick={this.props.PreviousButton}>
                    Next
                </button>
            </div>
        )
    }
}

export default Buttons