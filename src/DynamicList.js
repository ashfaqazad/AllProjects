//Dynamic List without States


import React from 'react';

const DynamicList = () => {
    // Example items array
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Date' },
        { id: 5, name: 'Elderberry' },
    ];

    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>  // Key prop zaroori hai
                ))}
            </ul>
        </div>
    );
}

export default DynamicList;



