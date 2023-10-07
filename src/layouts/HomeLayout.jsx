import { Outlet } from "react-router-dom"
import { Header } from "../components/Global/Header"
import { Footer } from "../components/Global/Footer"

export const HomeLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}