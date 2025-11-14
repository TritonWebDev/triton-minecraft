import McButton from "./mc-button";

export default function Navbar() {
    return (
        <nav className="mx-auto w-full flex justify-center items-center gap-4">
            <McButton title="Home"/>
            <McButton title="About"/>
            <McButton title="Contact"/>
        </nav>
    )
}