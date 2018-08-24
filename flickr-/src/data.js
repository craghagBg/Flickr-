import query from 'query-string'
import tools from './common/tools'

class data {
    constructor () {
        this.config = {
            url: 'https://api.flickr.com/services/rest/?',
            photoSearchParams: {
                method: 'flickr.photos.search',
                api_key: 'd1fc46cdc4199c29fb00bd7c3e3307bf',
                safe_search: '1',
                format: 'json',
                nojsoncallback: '1',
                per_page: '32',
                page: '1',
                text: 'Holiday Extras',
                extras: 'description,owner_name,tags'
            },
            sizeSuffix: 'n'
        }
    };

    get (text, page) {
        this.config.photoSearchParams.text = text || this.config.photoSearchParams.text;
        this.config.photoSearchParams.page = page || this.config.photoSearchParams.page;

        const url = this.config.url + query.stringify(this.config.photoSearchParams);

        return fetch(url).then((resultJSON) => {
            return resultJSON.json().then((itemData) => {
                const items = [];

                if (tools.has(['photos', 'photo'], itemData) ) {
                    itemData.photos.photo.filter((photo) => {
                        const item  = {
                            id: photo.id,
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${this.config.sizeSuffix}.jpg`,
                            description: photo.description._content,
                            title: photo.title,
                            author: photo.ownername
                        };

                        items.push(item);
                    });
                }

                return items;
            }, this.error);
        }, this.error)
    }

    error() {
        console.log('fetch error');
        return [];
    }
}

export default new data();

