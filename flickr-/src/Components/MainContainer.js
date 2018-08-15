import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Grid from './Grid.js'
import Poster from './Poster.js'
import flickerStore from '../Stores/flickrStore'

class MainContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: []
        };

        flickerStore.on('change', () => {
            this.setState({ items: flickerStore.items })
        })
    }

    componentDidMount() {
        this.setState({ items: flickerStore.getItems() })
    }

    showPoster () {

    }

    nextPoster () {

    }

    render () {
        return (
            <Switch>
                <Route path='/' component={Grid}/>
                {/*<Route path='#' component={Poster}/>*/}
            </Switch>)
    }
}

export default MainContainer