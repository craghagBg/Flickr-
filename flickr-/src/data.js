class data {
    constructor () {
        this.url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
        //this.url = 'https://content.googleapis.com/youtube/v3/search?key=AIzaSyCCKLybKJyAthr83ecSAdjEQrlfnG6VMpo&maxResults=40&part=snippet&q=a';
        this.init = {
            method: 'GET',
            headers: {
                "Content-Type": "text/html, application/xhtml+xml, application/xml;",
                'Access-Control-Allow-Origin': '*'
            },
            mode: 'cors',
            cache: 'default'
        }
    }

    get () {
        return fetch(this.url, this.init).then((r) => {
            console.log(r)
        })
    }
}

export default new data();
