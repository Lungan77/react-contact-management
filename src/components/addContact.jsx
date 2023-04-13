import { useState } from 'react'

function AddContact(props) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const handleSubmit = (e) => {
        props.handleSubmit({name, number})
        setName('')
        setNumber('')
        e.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                type="text"
                placeholder='add name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
            />
            <input
                type="number"
                placeholder='add number'
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                required
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddContact