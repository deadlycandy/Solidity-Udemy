// import React from 'react';
const React = require('react');
const ReactDOM = require('react-dom');
// Creating new component. Produce some html.
const App = () =>{
    return <div> Hi! </div>;
}

//Insert into html document
// Rendering to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
