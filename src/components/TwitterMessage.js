import React from "react";

class TwitterMessage extends React.Component {
  // constructor() {
    // super();
    // this.state = {
    //   value: ''
    
  // }

  state = {
    value: ''
  }

  handleChange = (e) => {
    // console.log(this.state.remainingChars)
    const message = e.target.value
    console.log(this.state.message)
    this.setState( (prevState) => {
      return {
        value: message
      }
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.value}/>
        {this.props.maxChars - this.state.value.length}
        {console.log(this.state.remainingChars)}
      </div>
    );
  }
}

export default TwitterMessage;
