import React, {Component} from 'react';

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
    }

    render () {
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <div className='searchContainer'>
                    <input type='text' placeholder='Search' onChange={this.updateInputValue.bind(this)}/>
                    <input type="submit"/>
                </div>
            </form>
        );
    }
}

export default Search;

