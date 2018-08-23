import dispatcher from '../dispatcher'

let flickrActions = {
    fetchData: (text) => {
        dispatcher.dispatch({
            type: 'FETCH_DATA',
            text
        })
    }
};

export default flickrActions