import EventEmitter from 'events'
import dispatcher from '../dispatcher'
import data from '../common/data'

class FlickrStore extends EventEmitter {
    /**
     *
     * @param {String} text
     * @param {Number} page
     */
    getItems (text, page) {
        data.get(text, page).then((items) => {
            this.emit('change', {items, text, page});
        });
    }

    /**
     *
     * @param {Object} action
     */
    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': {
                this.getItems(action.text, action.page)
            } break;

            default: break
        }
    }
}

let flickrStore = new FlickrStore();

dispatcher.register(flickrStore.handleAction.bind(flickrStore));

export default flickrStore