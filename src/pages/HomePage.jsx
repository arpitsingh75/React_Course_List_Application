import { useEffect, useState } from "react"
import { StackTiles} from "../components/Common/StackTiles";
import { NavLink } from "react-router-dom"

export const HomePage = () => {
    
    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://localhost:3000/courses')
        .then(response => response.json())
        .then(data => {setData(data)})
    }, [])
    // const createCourseList = () => {
    //     return data.map((course) => {
    //         return <li key={course.id}>
    //             {/* <NavLink to={`/courses/${course.id}`}>{course.title}</NavLink> */}
    //             <p className="text-l text-red-600">{course.title}</p>
    //             <p className="text-l text-red-600">{course.author}</p>
    //         </li>
    //     })
    // }

    const createHomePage = () => {
        return data.map((course) => {
            return <div key={course.id} className="ml-8 my-4 border-2 border-white text-white  hover:text-black hover:bg-white">
                <StackTiles id={course.id} title={course.title} author={course.author} duration={course.duration} />
                <NavLink to={`newquery/${course.id}/${course.title}`} className="float mx-60 bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4">Query</NavLink>
            </div>
        })
    }

    return <>
        <div className="flex flex-cols flex-wrap justify-around bg-slate-900">
            {data && createHomePage()}
        </div>

    </>
}