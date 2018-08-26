import React, { Component } from 'react';
import '../Styles/Grid.css'
import { Link } from 'react-router-dom'

class Grid extends Component {
    /**
     * @param props
     */
    constructor () {
        super();

        this.sizeSuffix = '_n.jpg';
    }

    render() {
        let key = 0;

        const containers = this.props.items.map((item) => {
            const linkData = {
                pathname: `${process.env.PUBLIC_URL}/poster/`,
                state: { item, items: this.props.items }
            };
            const description = item.description ?
                item.description.length > 120 ?
                    `Description: ${item.description.slice(0, 120)}...`
                    : `Description: ${item.description}`
                : '';

            const tags = item.tags ? `Tags: ${item.tags}` : '';
            const linkToPhoto = `https://www.flickr.com/photos/${item.owner}/${item.id}`;
            const linkToAuthor = `https://www.flickr.com/photos/${item.owner}`;

            return (
                <li key={++key} className='container'>
                    <Link to={linkData}>
                        <img src={item.src + this.sizeSuffix} alt={item.id} />
                    </Link>
                    <div className='row'>
                        <a href={linkToPhoto} className='short left ext-link'>{ item.title }</a>
                        <a href={ linkToAuthor } className='short right ext-link'>by {item.ownerName}</a>
                    </div>
                    <div className='description'>{ description }</div>
                    <div className='tags'>{ tags }</div>
                </li>
            )
        });

        if (containers.length === 0 && this.props.ready === true) {
            return <h1>'No Result Found'</h1>
        }

        return (
            <ul id='grid'>
                {containers}
            </ul>
        )
    }
}

export default Grid