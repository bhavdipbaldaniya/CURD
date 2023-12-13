import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {

    const [id, setid] = useState("")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const go = useNavigate()

    const datas = { id, name, email }
    const { empid } = useParams();

    useEffect(() => {
        fetch(" ocalhost:8000/employe/" + empid).then((res) => res.json()).then((data) => {
            setid(data.id);
            setname(data.name);
            setemail(data.email)
        })
    }, [empid])

    const handlesubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/employe/" + empid, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            }, body: JSON.stringify(datas)
        }).then((res) => {alert(" Edited Employe Successfully....!", go("/"))})

    }

    return (
        <div className='col-6 m-auto my-5 border border-3 '>
            <h1 className='m-4 text-center'>Registration Form</h1>
            <form className='m-4 text-start' onSubmit={handlesubmit}>
                <div className='mb-3'>
                    <label htmlFor='id' className='form-label'>ID</label>
                    <input type="text" value={id} disabled={true} onChange={(e) => { setid(e.target.value) }} className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='id' className='form-label'>Name</label>
                    <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='id' className='form-label'>Email</label>
                    <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Save
                </button>
                <button type='button' onClick={() => go('/')} className='btn btn-secondary ms-2'>
                    Go Back
                </button>
            </form>
        </div >
    )
}

export default Edit
