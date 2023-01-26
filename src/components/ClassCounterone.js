import React, { Component } from "react";

class ClassCounterone extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState!==this.state.count){
    console.log('updating the document title')
    document.title = `clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        ></input>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounterone;
