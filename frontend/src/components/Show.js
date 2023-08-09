import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import React from 'react';

const URI = 'https://crus-notes.onrender.com/'

const CompShow = () => {
    const [notas, setNotas] = useState([])
    
    useEffect( ()=>{
        getNotas()
    },[])

    //procedimineto para mostrar todos los blogs
    const getNotas = () => {
        fetch(URI)
		.then(response => response.json())
		.then(data => {	
			setNotas(data.notas)})
		.catch(error => console.error(error))
	}

    //Eliminar una nota
    const deleteNota = (id) =>{
        axios.delete(`${URI}${id}`)
        getNotas()
    }
    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        { 
                            notas.map ( (props) => (
                                <tr key={ props.id}>
                                    <td> { props.titulo } </td>
                                    <td> { props.content } </td>
                                    <td>
                                        <Link to={`/update/${props.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteNota(props.id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )
}


export default CompShow