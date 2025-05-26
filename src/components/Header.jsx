import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
    return (
        <header className="flex relative justify-between font-display text-white font-semibold p-6 px-8 mt-4 ml-4 bg-[#131315] rounded-full">
            <h1>kevinruangrad.</h1>
            <nav>
                <ul className="flex space-x-10">
                    <li>
                        <Link to="#work">projects.</Link>
                    </li>
                    <li>
                        <Link to="#spotify">work./education.</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
