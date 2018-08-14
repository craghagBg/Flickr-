class data {
    constructor () {
        this.url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
    }

    get () {
        return fetch(this.url)
            .then(function(response) {
                return response.json();
            })
    }
}

export default data;
