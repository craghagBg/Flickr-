import React, {Component} from 'react';
import flickrActions from '../Actions/flickrActions.js'

class MainContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        flickrActions.fetchData();
    }

    render() {
        return (
            <div className="Main-container" >
                {}
            </div>
        );
    }
}

export default MainContainer;
