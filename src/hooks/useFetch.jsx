import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"

export const useFetch = (URL) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
        }, [])

    const createUserList = () => {
        return data.map((user) => {
            return <li key={user.id} className="my-4">
                <NavLink to='/'>{user.title}</NavLink>
                <p className="text-l text-red-600">{user.author}</p>
            </li>
        })
    }

    return <ul>{data && createUserList()}</ul>
}
