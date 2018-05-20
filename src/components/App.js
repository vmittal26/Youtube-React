import React, {Component} from 'react'
import SearchBar from './search_bar';
import VideoList from './video_list';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDBNYSsDDSrQMVvk-a-nZeVUgQemWUXnRM';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };

        this.videoSearch('avengers');
    }
    render() {
        return (
            <div>
                <SearchBar onSearchTermChange= {term=>this.videoSearch(term)}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term,
            maxResults: '10'
        }, (videos) => this.setState({videos}));
    }
}

export default App;