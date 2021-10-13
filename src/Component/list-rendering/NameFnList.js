import React from 'react'
import Person from './Person';

//A "key" is a special string attribute you need to incldue when creating lists of elements.
//Keys give the elements a stable identity.
//Keys help React identify which items have changed, are added, or are removed.
//Help in efficient update of the user interface.

/*
    When to use index as a key
    1. The items in your list do not have a unique id.
    2. The list is a static list and will not change.
    3. The list will never be reordered or filtered.
*/

export default function NameFnList() {
    const names = [
        { id: 1, name: 'Jack' },
        { id: 2, name: 'Ti Hoe' },
        { id: 3, name: 'William' },
        { id: 4, name: 'Karthik' },
        { id: 5, name: 'Nithya' }];
    const nameList = names.map((item) => <Person key={item.id} person={item.name} />);
    return (
        <div>
            <h4>Name List in Funtion Component</h4>
            {nameList}
        </div>
    )
}
