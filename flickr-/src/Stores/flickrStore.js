import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import data from '../common/data'

class FlickrStore extends EventEmitter {
    constructor () {
        super();
        this.items = [];
    }

    getItems (text, page) {
        data.get(text, page).then((items) => {

            this.items = items;
            this.emit('change', {items, text, page});
        });
    }

    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': {
                this.getItems(action.text, action.page)
            }
        }
    }
}

let flickrStore = new FlickrStore();

dispatcher.register(flickrStore.handleAction.bind(flickrStore));

export default flickrStore