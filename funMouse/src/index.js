// import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// create a react component

const App = function() {
  return (
    <div>
      <label htmlFor="" />
      <input type="text" name="" id="" />
      <button type="submit" />
    </div>
  );
};
// take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));
