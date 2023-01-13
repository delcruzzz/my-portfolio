import { useState } from "react";
import Menu from "../icons/menu";
import ResNavbar from "./res_navbar";

export default function Navbar() {

    const [toggle, setToggle] = useState(false)

    const handleMenu = () => {
        setToggle(!toggle)
    }

    return (
        <header className="w-full z-30 top-0 sticky">
            <div className="flex items-center justify-between px-4 md:px-12 py-2">
                <section className="text-2xl font-bold uppercase">
                    <a href="/">delcruz</a>
                </section>
                <section className="hidden md:flex items-center justify-between space-x-56 font-semibold text-md">
                    <nav className="flex flex-col">
                        <a href="#1">projects</a>
                        <a href="#2">technologies</a>
                    </nav>
                    <nav className="flex flex-col">
                        <a href="#3">about me</a>
                        <a href="#">contact me</a>
                    </nav>
                </section>
                <section className="inline md:hidden">
                    <button className="" onClick={handleMenu}>
                        <Menu />
                    </button>
                </section>
            </div>

            <ResNavbar toggle={toggle} handleMenu={handleMenu} />
        </header>
    )
}