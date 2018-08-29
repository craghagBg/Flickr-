import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
import Search from "./Search";

/**
 *
 */
class Header extends Component {
    render() {
        return (
            <div className='App-Header'>
                <h1 className="App-title"><Link to='/'>Flickr</Link></h1>
                <Search />
            </div>
        );
    }
}

export default Header;
