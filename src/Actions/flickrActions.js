import dispatcher from '../dispatcher'

let flickrActions = {
    /**
     *
     * @param {String} text - search text
     * @param {Number} page - page > 1 -> next page; page === 1 -> new search
     */
    fetchData: (text, page) => {
        dispatcher.dispatch({
            type: 'FETCH_DATA',
            text,
            page
        })
    }
};

export default flickrActions