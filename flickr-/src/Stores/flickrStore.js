import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import data from '../data'

class flickrStore extends EventEmitter {
    constructor () {
        super();
        this.items = [];
    }

    getItems (title) {
        data.get().then((items) => {
            if (title) {
                items = items.filter((item) => {
                    if (item.tag.split(' ').contains(title)) {
                        return item;
                    }
                })
            }

            this.items = items;
            this.emit('change')
        });
    }

    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': {
                this.getItems(action.title)
            }
        }
    }
}

let store = new flickrStore();

dispatcher.register(store.handleAction.bind(store));

export default store