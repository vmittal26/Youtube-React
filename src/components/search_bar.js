import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        return <input
            value={this.state.value}
            placeholder="Search"
            className='search_bar'
            onChange={event => this.onInputChange(event.target.value)}/>;
    }

    onInputChange(value){
        this.setState({value});
        this.props.onSearchTermChange(value);
    }
}

export default SearchBar;
