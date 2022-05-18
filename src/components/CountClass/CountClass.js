import { Component } from "react";

class CountClass extends Component {

    constructor (props){
    super(props)
    this.state = { count: 0}

    }
decrement = () => {
    this.SetState ({
        count: this.state.count -1
    })

    
}
}