import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
        <div className="flex flex-row bg-black text-white">
            <h1 className="p-2 py-4 font-bold">Course Details</h1>
            <div className="p-2 py-4 ms-auto font-bold">
                <NavLink to="/" className="p-2 py-4 font-bold mr-10">Home</NavLink>
                <NavLink to="queries" className="p-2 py-4 font-bold mr-10">Queries</NavLink>
            </div>
        </div>
        </>
    )
}