import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

const PetList = props =>{

    const [Pets, setPets] = useState([])
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/")
        .then(res=>{setPets(res.data.Pets)})
        .catch(err=>console.log(err))
    })

    // const DeletePet = (id) =>{
    //     axios.delete("http://localhost:8000/api/products/delete/"+id)
    //     .then(res =>{console.log(res)
    //     navigate("/")})
    //     .catch(err =>{console.log(err)})
    // }

    return <div>
        <h1>Pet Shelter</h1>
        <h3>These Pets are looking for a good home</h3>
        <h5><Link to = {'/pets/new'}> Know of a pet in need of a home?</Link></h5>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {Pets.map((pet, i)=>
            <tr key = {i}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td><Link to = {'/pets/'+pet._id}> Details</Link> | <Link to = {'/pets/edit/'+pet._id}> Edit</Link> </td>
            </tr>)}
            </tbody>
        </table>
    </div>
}

export default PetList