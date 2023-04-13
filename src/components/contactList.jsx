import React from 'react'

function ContactList({ data, onDelete }) {

    const list = data.map((item, index) =>
        <li key={index} className="item">
            <p>{item.name}</p>
            <p>{item.number}</p>
            <span onClick={() => onDelete(item.id)} >X</span>
        </li>
    )
    return (
        <div className='list'>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default ContactList