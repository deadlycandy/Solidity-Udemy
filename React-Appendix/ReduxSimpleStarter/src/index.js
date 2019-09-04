const React = require('react');
const Component = React.Component;
const ReactDOM = require('react-dom');
const YTSearch = require('youtube-api-search');
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail'
const API_KEY = 'AIzaSyDLtJjbP9OybFHdZbb83qlpY7wVTKm-KFU';



// Creating new component. Produce some html.
class App extends Component{
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'Surfboards' }, (videos) => {
            this.setState({videos});
        });
    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

//Insert into html document
// Rendering to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
