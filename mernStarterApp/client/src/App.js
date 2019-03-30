import React, { Component } from 'react';

class App extends Component {
  state = {
    input: ''
  };

  handleKeyPress = event => {
    if (event.key == 'Enter') {
      console.log('Button Logic');
    }
  };

  render() {
    return (
      <div className="jumbotron">
        <input type="text" id="one" onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default App;
