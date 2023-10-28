import React from 'react';
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const URI = 'https://notes-backend-amu5.onrender.com/'

const CompCreate = () => {
    const [titulo, setTitulo] = useState ('')
    const [content, setContent] = useState ('')
    const navigate = useNavigate()

    const store = (e) => {
        e.preventDefault()
        axios.post(URI, {titulo:titulo, content:content})
        navigate('/')
    }

    return (        
        <div>
            <h3 className='h3'>CREATE NOTE</h3>
            <form className='form' onSubmit={store}>
                <label className='form-label'>Title:</label>
                <input
                    value={titulo}
                    onChange={ (e) => setTitulo(e.target.value)}
                    type="text"
                    className='form-control'
                />
                <label className='form-label'>Content:</label>
                <textarea
                    value={content}
                    onChange={ (e) => setContent(e.target.value)}
                    type="hypertext"
                    className='form-control'
                />
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default CompCreate