import Close from "../icons/close";

export default function ResNavbar({ toggle, handleMenu }) {
    return (
        <section className={ toggle ? "w-full h-screen z-50 top-0 right-0 absolute block bg-[#f7f6f1] md:hidden" : "hidden md:hidden" }>
            <section className="flex items-center justify-end px-4 py-2">
                <button onClick={ handleMenu }><Close /></button>
            </section>
            <nav className="flex flex-col px-12 py-4 space-y-8 font-bold text-[2.8rem]">
                <a href="#1" onClick={ handleMenu }>projects</a>
                <a href="#2" onClick={ handleMenu }>technologies</a>
                <a href="#" onClick={ handleMenu }>about me</a>
                <a href="#" onClick={ handleMenu }>contact me</a>
                <a href="https://www.linkedin.com/in/leonardo-jos%C3%A9-de-la-cruz-ardila-08b65623b/" target="_blank" onClick={ handleMenu }>linkedin</a>
                <a href="https://twitter.com/delcruz88" target="_blank" onClick={ handleMenu }>twitter</a>
            </nav>
        </section>
    )
}