import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputVal: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  remainingChars = () => {
    return this.props.maxChars - this.state.inputVal.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(e) => this.handleInputChange(e)} value={this.state.inputVal}/>
        <p>{this.remainingChars()} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
