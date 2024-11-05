import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchData = () => {
    const [data, setData] = useState([])  // Initial state is an empty array

    useEffect(() => {
        // Fetch data when component mounts
        axios.get('https://api.example.com/data')  // Replace with your API URL
            .then(response => {
                setData(response.data)  // Set the fetched data in state
                console.log(response.data)  // Log data to check
            })
            .catch(error => {
                console.error("There was an error fetching data:", error)  // Handle errors
            })
    }, [])  // Empty dependency array so it runs only once on component mount

    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>  // Render fetched data, assuming it has `id` and `name` fields
                ))}
            </ul>
        </div>
    )
}

export default FetchData
