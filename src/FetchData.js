import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] =useState([])

    useEffect(()=>{
        axios.get('https://example.com')
        .then(response => {
            setData(response.data)
            console.log(response.data);
            
        }).catch(error)
        
    },[])

return (
<>
<div>
    <h1>Heading</h1>
    <ul>
        {data.map(item =>(
        <li key={item.id}>{item.name}</li>
        ))}
    </ul>
</div>
</>

)
}

export default FetchData