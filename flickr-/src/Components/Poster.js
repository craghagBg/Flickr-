import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import tools from '../common/tools'

class Poster extends Component {

    constructor(props){
        super(props);

        this.state = {
            item: tools.has(['location', 'state', 'item'], props) ? props.location.state.item : null,
            index: tools.has(['location', 'state', 'items'], props) ? props.location.state.items.indexOf(props.location.state.item) : null,
            items: tools.has(['location', 'state', 'items'], props) ? props.location.state.items : null
        };
        this.sizeSuffix = {
            small: '_n.jpg',
            large: '_h.jpg'
        };
    }

    componentWillUnmount() {
        this.setState({})
    }

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
        if (!this.state.item) {
            return <Redirect to='/'/>;
        }

        return (
            <div>
                <button onClick={this.prev.bind(this)}>Prev</button>
                <img src={this.state.item.src + this.sizeSuffix.large} />
                <button onClick={this.next.bind(this)}>next</button>
            </div>

        )

    }
}

export default Poster;
