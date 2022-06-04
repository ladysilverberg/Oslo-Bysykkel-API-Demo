import React from 'react'
import Fuse from 'fuse.js'
import { useState } from 'react'

const MAX_RESULTS = 25

export default function SearchBar(props) {
    const [ query, setQuery ] = useState('')
    const [ results, setResults ] = useState([])

    const fuse = new Fuse(props.items, {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: ['name']
    })

    function onSearch(value) {
        setQuery(value)
        setResults(
            fuse.search(query)
                .map((result) => ({ ...result.item }))
                .slice(0, MAX_RESULTS)
        )
    }

    function onSelect(item) {
        setQuery(item.name)
        props.onClickCallback(item)
    }

    return (
        <React.Fragment>
            <input type="text" value={ query } onChange={ (e) => onSearch(e.target.value) } placeholder={"Søk etter stativ"} />
            <ul className="List">
                { results.map((result, index) => (
                    <li className="ListItem" key={ result.station_id } onClick={ (e) => onSelect(result) }>
                        { result.name }
                    </li>
                )) }
            </ul>
        </React.Fragment>
    )
}

