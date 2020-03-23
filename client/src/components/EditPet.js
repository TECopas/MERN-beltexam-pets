import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router'

const EditPet = props =>{

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
                console.log(res)
            })
            .catch(err => console.log(err));
    },[]);

    const UpdatePet = e =>{
        e.preventDefault();
        axios.put(
            "http://localhost:8000/api/pets/update/"+props._id,{
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
            })
            .then(res=>{console.log(res)
            navigate("/")})
            .catch(err=>console.log(err))
            
    }

    return <fieldset>
        <legend>{name}</legend>
        <form onSubmit={UpdatePet}>
        <p>Pet Name: <input type="text" onChange={e=>setname(e.target.value)} value={name}/></p>
         <p>Pet Type: <input type="text" onChange={e=>settype(e.target.value)} value={type}/></p>
         <p>Description: <input type="text" onChange={e=>setdesc(e.target.value)} value={description}/></p>
         <p>Skill 1: <input type="text" onChange={e=>setskill1(e.target.value)} value={skill1}/></p>
         <p>Skill 2: <input type="text" onChange={e=>setskill2(e.target.value)} value={skill2}/></p>
         <p>Skill 3: <input type="text" onChange={e=>setskill3(e.target.value)} value={skill3}/></p>
         <button>Update Pet Information</button>
        </form>
        <Link to = {'/'}> Return to Main Page</Link> 
    </fieldset>
}

export default EditPet