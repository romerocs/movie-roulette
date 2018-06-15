import React, { Component } from "react";

class ThumbUpBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }


    componentWillMount() {

    }

    //Watch for state changes
    componentDidUpdate() {
 
    }

    componentWillReceiveProps(props, state) {
        if(this.props.buttonState.nextMovie) {
            this.setState({disabled:false});
        }
        if(this.props.buttonState.wantToSee) {
            this.setState({disabled:true});
        }
    }
    clickHandler() {
        this.props.thumbUpClick(true);
        this.setState({disabled:true});
    }

    render() {
        return <button onClick={this.clickHandler} disabled={this.state.disabled} className="thumbUpBtn">Thumb Up</button>;
    }
}

export default ThumbUpBtn;