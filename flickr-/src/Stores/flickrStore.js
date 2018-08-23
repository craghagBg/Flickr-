import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import data from '../data'

class FlickrStore extends EventEmitter {
    constructor () {
        super();
        this.items = [];
    }

    getItems (text) {
        data.get(text).then((items) => {

            this.items = items;
            this.emit('change', {items});
        });
    }

    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': {
                this.getItems(action.text)
            }
        }
    }
}

let flickrStore = new FlickrStore();

dispatcher.register(flickrStore.handleAction.bind(flickrStore));

export default flickrStore