const Buttons=(props)=>{
    return (
        <div>
            <button 
                className="Buttons"
                onClick={() => { props.PreviousButton() } }>
                 Previous
            </button>
            <button
                className="Buttons"
                onClick={() => { props.NextButton() } }>
                  Next
            </button>
        </div>
    )
}

export default Buttons