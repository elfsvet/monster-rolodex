import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    // const {onSearchChange} = this.props
    
    render() {
        return (
            <input
            className={`search-box ${this.props.className}`}
            type='search'
            placeholder={this.props.placeholder}
            // anonymous function moved to a method for app
            onChange={this.props.onChangeHandler}
          />
        )
    }
}

export default SearchBox;