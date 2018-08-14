import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import data from '../data.js'

class flickrStore extends EventEmitter {
    constructor () {
        super();

        this.state = {
            items : data.get()
        }
    }

    get (title) {
        this.setState({items: data.get(title)});
        this.emit('change')
    }

    getItems (title) {
        return title ? this.state.filter((item) => { if (title === item) {return item} }) : this.state.items
    }

    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': {
                this.get(action.title)
            }
        }
    }
}

let flickrStore = new flickrStore();

dispatcher.register(flickrStore.handleAction.bind(flickrStore));

export default flickrStore