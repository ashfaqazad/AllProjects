import React, { useState } from 'react'

const Input = () => {

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)  // Input field mein typing par value update hogi
    }

    const handleClick = () => {
        console.log("Button clicked!")  // Aap yahan kuch aur bhi kar sakte hain
        setInput('')  // Button click hone ke baad input field clear ho jayegi
    }

    return (
        <div>
            <form>
                <label className='mr-2'>Name</label>
                <input type="text"
                    placeholder='Write here'
                    value={input}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className='btn btn-primary m-1'
                    onClick={handleClick}  // Button click se handleClick chalega
                >
                    Click
                </button>
            </form>
        </div>
    )
}

export default Input
