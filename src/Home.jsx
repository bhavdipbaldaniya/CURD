import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Home() {
    const [empdata, setempdata] = useState("")
    const go = useNavigate()

    useEffect(() => {
        fetch("http://localhost:8000/employe").then((res) => res.json()).then((data) => { setempdata(data) })
    }, [])

    const HandleEdit = (id)=>{
        go("Edit/"+id)
    }

    const HandleVeiw = (id)=>{
        go("Veiw/"+id)
    }

    const HandleDelete = (id)=>{
        fetch("http://localhost:8000/employe/" + id, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(empdata)
        }).then((res) => {alert(" Deleted Employe Data Successfully....!",window.location.reload())})

    }



    return (
        <div className='container justify-content-center'>
            <h1>Json Crud</h1>
            <Link to={"/Create"} className='btn btn-primary'>Add Employe (+)</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empdata && empdata.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='btn btn-info me-2' onClick={()=>{HandleEdit(item.id)}}>Edit</button>
                                    <button className='btn btn-danger me-2' onClick={()=>{HandleDelete(item.id)}}>Delete</button>
                                    <button className='btn btn-warning' onClick={()=>{HandleVeiw(item.id)}}>View</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home
