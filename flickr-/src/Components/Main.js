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
            text: 'Holiday Extras',
            page: 1,
            items: []
        };

        document.addEventListener('scroll', this.trackScrolling.bind(this));

        flickerStore.on('change', (event) => {
            if (event.page > 1) {
                this.setState((prevState) => {
                    return {
                        text: event.text,
                        items: prevState.items.concat(event.items)
                    }
                })
            } else {
                this.setState({ items: event.items, text: event.text })
            }
        });
    }

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }
    componentDidMount() {
        flickrAction.fetchData(this.state.text);

    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling.bind(this));
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('root');

        if (this.isBottom(wrappedElement)) {
            console.log('main bottom reached');
            flickrAction.fetchData(this.state.text, ++this.state.page );

        }
    };

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