import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router'

const PetDetail = props =>{

    const [name, setname] = useState("")
    const [type, settype] = useState("")
    const [description, setdesc] = useState("")
    const [skill1, setskill1] = useState("")
    const [skill2, setskill2] = useState("")
    const [skill3, setskill3] = useState("")

    useEffect( () =>{
        axios.get('http://localhost:8000/api/pets/'+props._id) //
            .then(res => { //Set {} after the => to be able to set multiple abilities per function, example below
                console.log(res.data.name)
                setname(res.data.onePet.name)
                settype(res.data.onePet.type)
                setdesc(res.data.onePet.description)
                setskill1(res.data.onePet.skill1)
                setskill2(res.data.onePet.skill2)
                setskill3(res.data.onePet.skill3)
            })
            .catch(err => console.log(err));
    },[]);

    const adoptPet = e =>{
        e.preventDefault()
        axios.delete("http://localhost:8000/api/pets/delete/"+props._id)
        .then(res =>{console.log(res)
        navigate("/")})
        .catch(err =>{console.log(err)})
    }

    return <fieldset>
        <legend>{name}</legend>
        <p>Pet Name:{name}</p>
         <p>Pet Type: {type}</p>
         <p>Description: {description}</p>
        <table>
            <tr>
                <th>Skills:</th>
            </tr>
            <tbody>
            <tr><td>{skill1}</td></tr>
            <tr><td>{skill2}</td></tr>
            <tr><td>{skill3}</td></tr>
            </tbody>
        </table>
        <form onSubmit={adoptPet}>
         <button>Adopt This Pet</button>
         </form>
         <br/>
        <Link to = {'/'}> Return to Main Page</Link> 
    </fieldset>
}

export default PetDetail