import React, { Component } from 'react'
import Person from './Person';

//A "key" is a special string attribute you need to incldue when creating lists of elements.
//Keys give the elements a stable identity.
//Keys help React identify which items have changed, are added, or are removed.
//Help in efficient update of the user interface
export default class NameClassList extends Component {
    render() {
        const names = ['Jack', 'Ti Hoe', 'William', 'Karthik', 'Nithya'];
        const nameList = names.map((name, index) => <Person key={index} person={name} />);
        return (
            <div>
                {nameList}
            </div>
        )
    }
}
