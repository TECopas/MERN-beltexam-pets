import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const AddPet = props =>{

  const [name, setname] = useState("")
  const [type, settype] = useState("")
  const [description, setdesc] = useState("")
  const [skill1, setskill1] = useState("")
  const [skill2, setskill2] = useState("")
  const [skill3, setskill3] = useState("")

  const [errors, seterrors] = useState({})

  const GeneratePet = e =>{
    e.preventDefault();
    axios.post(
      "http://localhost:8000/api/pets/new",{
      name,
      type,
      description,
      skill1,
      skill2,
      skill3,
      })
      .then(res=>{console.log(res)
        if (res.data.errors)
           seterrors(res.data.errors)
        else
          navigate("/")})
      .catch(err=>{console.log(err)})
  }

    return <div>
        <form onSubmit={GeneratePet}>
         <p>Pet Name: <input type="text" onChange={e=>setname(e.target.value)} value={name}/></p>
          <p style ={{color:"red"}}>{errors.name? errors.name.message: ""}</p>
         <p>Pet Type: <input type="text" onChange={e=>settype(e.target.value)} value={type}/></p>
         <p style ={{color:"red"}}>{errors.type? errors.type.message: ""}</p>
         <p>Description: <input type="text" onChange={e=>setdesc(e.target.value)} value={description}/></p>
         <p style ={{color:"red"}}>{errors.description? errors.description.message: ""}</p>
         <p>Skill 1: <input type="text" onChange={e=>setskill1(e.target.value)} value={skill1}/></p>
         <p>Skill 2: <input type="text" onChange={e=>setskill2(e.target.value)} value={skill2}/></p>
         <p>Skill 3: <input type="text" onChange={e=>setskill3(e.target.value)} value={skill3}/></p>
         <button>Add Pet</button>
        </form>
        <Link to = {'/'}> Return to Main Page</Link> 
    </div>
}

export default AddPet