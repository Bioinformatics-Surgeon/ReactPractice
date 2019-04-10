const React = require('react');
const useState = React.useState;
const ReactDOM = require('react-dom');
require('./index.css');

const App = () => {
  const [resource, setResource] = useState('post');
  return (
    <div>
      <h1 className="jumbotron text-center">Todos or Post</h1>
      <div className="container d-flex justify-content-center">
        <button
          className="btn btn-success m-2"
          onClick={() => {
            setResource('Post');
          }}
        >
          Post
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            setResource('Todos');
          }}
        >
          Todos
        </button>
      </div>

      <div className="container d-flex justify-content-center h1">
        <div>{resource}</div>
      </div>
    </div>
  );
};
