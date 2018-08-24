import React, {Component} from 'react';
import flickrActions from "../Actions/flickrActions";

class Search extends Component {
    constructor (props) {
        super(props);

        this.state = {
            inputValue: ''
        }
    }

    updateInputValue (e) {
        e.preventDefault();
        this.setState({inputValue: e.target.value});
    }

    submit (e) {
        e.preventDefault();
        flickrActions.fetchData(this.state.inputValue)
    }

    render () {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <div className='searchContainer'>
                    <input type='text' value={this.state.inputValue} placeholder='Search' onChange={this.updateInputValue.bind(this)}/>
                    <input type="submit"/>
                </div>
            </form>
        );
    }
}

export default Search;

