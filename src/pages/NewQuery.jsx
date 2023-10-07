import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

export const NewQuery = () => {
    const {c_id, c_name} = useParams();
    const userQueryRef = useRef();
    const nameRef = useRef();
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        const username = nameRef.current.value;
        const userquery = userQueryRef.current.value
        const formData = { "coursename":c_name, "username": username, "userquery": userquery };

        fetch("http://localhost:3000/query", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => {
            if (response.status !== 400) {
                console.log(response.text())
                navigate("/")
            }
            else {
                console.log("oops")
            }
        }).catch((error) => console.log(error)
        )
    }

    return (
        <>
            <div className="min-h-screen flex justify-center bg-slate-900 text-white">
                <div className="m-10 border-2 border-white h-96">
                    <h1 className="m-4 text-center">Course Name : {c_id}</h1>
                    <h2 className="ml-8">Your Name: <input ref={nameRef} className="text-black mt-8 ml-3 w-60 mr-6 rounded" type="text" placeholder="  Enter Your Name" /></h2>
                    <h2 className="ml-8">Your Query: <input ref={userQueryRef} className="text-black text-ellipsis mt-8 ml-3 mr-6 w-60 h-44 rounded" type="text" placeholder="  Enter Your Query here " /></h2>
                    <button onClick={submitForm} className='bg-orange-700 rounded-md mx-52 mt-2 px-2 text-white'>Submit</button>
                </div>
            </div>
        </>
    )
}