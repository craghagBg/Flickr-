import query from 'query-string'
import tools from './tools'

class data {
    /**
     * Search parameters
     */
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
        }
    };

    /**
     *
     * @param {String} text - Search words
     * @param {Number} page - Current search page (default === 1)
     * @returns {Promise<Response>}
     */
    get (text, page) {
        this.config.photoSearchParams.text = text || this.config.photoSearchParams.text;
        this.config.photoSearchParams.page = page || this.config.photoSearchParams.page;

        const url = this.config.url + query.stringify(this.config.photoSearchParams);

        return fetch(url).then((resultJSON) => {
            return resultJSON.json().then((itemData) => {

                if (tools.has(['photos', 'photo'], itemData) ) {
                    return itemData.photos.photo.map((photo) => {
                        return {
                            id: photo.id,
                            src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`,
                            description: photo.description._content,
                            title: photo.title,
                            ownerName: photo.ownername,
                            owner:photo.owner,
                            tags: photo.tags
                        };
                    });
                }

                return []
            }, this.error);
        }, this.error)
    }

    /**
     *
     * @returns {Array}
     */
    error() {
        console.log('fetch error');
        return [];
    }
}

export default new data();

