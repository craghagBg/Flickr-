import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import flickerStore from '../Stores/flickrStore'
import tools from '../common/tools'
import '../Styles/Poster.css'

class Poster extends Component {
    /**
     *
     * @param props
     */
    constructor(props){
        super(props);

        this.state = {
            item: tools.has(['location', 'state', 'item'], props) ? props.location.state.item : null,
            index: tools.has(['location', 'state', 'items'], props) ? props.location.state.items.indexOf(props.location.state.item) : null,
            items: tools.has(['location', 'state', 'items'], props) ? props.location.state.items : null
        };
        this.sizeSuffix = '_b.jpg';

        this.onChange = this.onChange.bind(this);
        flickerStore.on('change', this.onChange)
    }

    onChange () {
        this.props.history.push(`${process.env.PUBLIC_URL}`);
    }

    componentWillUnmount () {
        flickerStore.removeListener('change', this.onChange)
    }

    /**
     *
     * @param {event} e
     */
    prev (e) {
        e.preventDefault();
        this.setState((prevState) => {
            const index = prevState.index > 0 ? prevState.index - 1 : prevState.index;

            return {
                index,
                item: prevState.items[index]
            }
        })
    }

    /**
     *
     * @param {event} e
     */
    next (e) {
        e.preventDefault();
        this.setState((prevState) => {
            const index = prevState.index < prevState.items.length ? prevState.index + 1 : prevState.index;

            return {
                index,
                item: prevState.items[index]
            }
        })
    }

    render () {
        return (
            <div >
                <div>
                    <button className='poster-button left' onClick={this.prev.bind(this)}>Prev</button>
                    <button className='poster-button'><Link  to='/'>Back</Link></button>
                    <button className='poster-button right' onClick={this.next.bind(this)}>Next</button>
                </div>
                <img src={this.state.item.src + this.sizeSuffix} alt='No Data' />
            </div>
        )
    }
}

export default Poster;
