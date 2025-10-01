import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import AboutModal from "./AboutModal.jsx";

const Header = () => {
    const [aboutModalOpen, setAboutModalOpen] = useState(false);

    return (
        <>
            <header className="flex relative justify-between font-display text-white font-semibold p-6 px-8 mt-4 ml-4 bg-[#131315] rounded-full">
                <h1>Kevinruangrad.</h1>
                <nav>
                    <ul className="flex space-x-10">
                        <li className="hover:text-[#ff5e1a] transition-colors duration-200 cursor-pointer">
                            <Link to="#work">Projects.</Link>
                        </li>
                        <li className="hover:text-[#ff5e1a] transition-colors duration-200 cursor-pointer">
                            <a
                                href="/Kevin_Ruangrad_CV_frontend.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Work./Education.
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => setAboutModalOpen(true)}
                                className="hover:text-[#ff5e1a] transition-colors duration-200 cursor-pointer"
                            >
                                About Me.
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <AboutModal
                open={aboutModalOpen}
                onClose={() => setAboutModalOpen(false)}
            />
        </>
    );
};

export default Header;
