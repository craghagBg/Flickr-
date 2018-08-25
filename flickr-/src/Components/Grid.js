import React, { Component } from 'react';
import '../Styles/Grid.css'
import { Link } from 'react-router-dom'

class Grid extends Component {
    constructor (props) {
        super();
        this.items = props.items;
        this.sizeSuffix = {
            small: '_n.jpg',
            large: '_h.jpg'
        }
    }
    render() {
        const containers = [];

        this.items.filter((item) => {
            const location = {
                pathname: `/poster/`,
                state: { item, items: this.items }
            };
            const description = item.description ?
                item.description.length > 120 ?
                    `Description: ${item.description.slice(0, 120)}...`
                    : `Description: ${item.description}`
                : '';

            const tags = item.tags ? `Tags: ${item.tags}` : '';
            const linkToPhoto = `https://www.flickr.com/photos/${item.owner}/${item.id}`;
            const linkToAuthor = `https://www.flickr.com/photos/${item.owner}`;

            containers.push (
                <li key={item.id} className='container'>
                    <Link to={location}>
                        <img src={item.src + this.sizeSuffix.small} alt={item.id} />
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

        return (
            <ul id='grid'>
                {containers}
            </ul>
        )
    }
}

export default Grid