const React = require('react');
const ReactDOM = require('react-dom');

//importing element.
import SearchBar from './Components/search_bar';

const API_KEY = 'AIzaSyDLtJjbP9OybFHdZbb83qlpY7wVTKm-KFU';

// Creating new component. Produce some html.
const App = () =>{
    return(
        <div>
            <SearchBar />
        </div>
    );

}

//Insert into html document
// Rendering to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
