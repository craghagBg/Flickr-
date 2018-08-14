import React, {Component} from 'react';
import '../Styles/Header.css'
import Search from "./Search";

class Header extends Component {
    render() {
        return (
            <div className='App-Header'>
                <h1 className="App-title">Flickr</h1>
                <Search />
            </div>
        );
    }
}

export default Header;
