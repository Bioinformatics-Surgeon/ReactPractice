// import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// create a react component

function getButtonText() {
  return 'Click on Me!';
}

const App = function() {
  return (
    <div>
      <label className="label" htmlFor="">
        {' '}
        Enter Name
      </label>

      <input type="text" name="" id="" />
      <button type="submit" className="btn btn-primary">
        {getButtonText()}
      </button>
    </div>
  );
};
// take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
