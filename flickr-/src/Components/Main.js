import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Grid from './Grid.js'
import Poster from './Poster.js'
import Header from './Header'
import flickrAction from '../Actions/flickrActions'
import flickerStore from '../Stores/flickrStore'

class Main extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: []
        };

        flickerStore.on('change', (event) => {
            this.setState({ items: event.items })
        })
    }

    componentDidMount() {
        flickrAction.fetchData();
    }

    showPoster () {
        console.log('showPoster');
    }

    nextPoster () {

    }

    render () {
        return (
            <Switch>
                <Route path='/' component={() => <Grid items={this.state.items} onclick={this.showPoster.bind(this)} />}/>
            </Switch>
        )
    }
}

export default Main