//Dynamic List rendring with states:-

import React, { useState } from 'react';

const DynamicListWithState = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
    ]);

    const addItem = () => {
        const newItem = { id: items.length + 1, name: 'New Fruit ' + (items.length + 1) };
        setItems([...items, newItem]); // New item ko state mein add karna
    };

    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Fruit</button> {/* New item add karne ka button */}
        </div>
    );
}

export default DynamicListWithState;
