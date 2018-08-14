import dispatcher from '../dispatcher'

let flickrActions = {
    fetchData: (title) => {
        dispatcher.dispatch({
            type: 'FETCH_DATA',
            title
        })
    }
};

export default flickrActions