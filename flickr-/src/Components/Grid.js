import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Grid extends Component {
    constructor (props) {
        super();
        this.items = props.items;
    }
    render() {
        const containers = [];

        this.items.filter((item) => {
            containers.push (
                <li key={item.id} className='container'>
                    <Link to={`/poster/${item.id}`}>
                        <img src={item.url} />
                    </Link>
                    <div className='first-row'>
                        <span className='title'>{item.title}</span> by <span className='author'>{item.author}</span>
                    </div>
                    <textarea className='second-row description'>{item.title}</textarea>
                    <div className='third-row tags'>Tags: {item.tag}</div>
                </li>
            )
        });

        return (
            <ul>
                {containers}
            </ul>
        )
    }
}

export default Grid