import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Grid from './Grid.js'
import Poster from './Poster.js'
import flickrAction from '../Actions/flickrActions'
import flickerStore from '../Stores/flickrStore'
import '../Styles/Main.css'

class Main extends Component {

    /**
     * constructor initialize search text and page = 1 => new search
     * @param props
     */
    constructor (props) {
        super(props);

        this.state = {
            text: 'bmw',
            page: 1,
            items: []
        };

        /**
         * listen for scroll down
         */
        document.addEventListener('scroll', this.trackScrolling.bind(this));

        /**
         *  listen for new data
         */
        flickerStore.on('change', this.onChange.bind(this));
    }

    /**
     * Handle the new data
     * @param event
     */
    onChange (event) {
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
    }

    /**
     *
     * @param {element} el
     * @returns {boolean}
     */
    isBottom(el) {
        return el.getBoundingClientRect().bottom - 10 <= window.innerHeight;
    }

    /**
     * fire the event for the new data
     */
    componentDidMount() {
        flickrAction.fetchData(this.state.text, 1);

    }

    /**
     * remove event listeners
     */
    componentWillUnmount() {
        flickerStore._events = [];
        document.removeEventListener('scroll', this.trackScrolling.bind(this));
    }

    /**
     * track the scrolling
     */
    trackScrolling = () => {
        const wrappedElement = document.getElementById('grid');

        if (wrappedElement && this.isBottom(wrappedElement)) {
            console.log('main bottom reached');
            flickrAction.fetchData(this.state.text, this.state.page + 1);
        }
    };

    render () {
        return (
            <div className='main'>
                <Switch>
                    <Route path= '/poster/' component={ Poster }/>
                    <Route path='/' component={() => <Grid items={this.state.items} />}/>
                </Switch>
            </div>

        )
    }
}

export default Main