import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import AboutModal from "./AboutModal.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const Header = () => {
    const [aboutModalOpen, setAboutModalOpen] = useState(false);

    return (
        <>
            <header className="flex relative justify-between items-center font-display text-white font-semibold p-6 px-8 mt-4 ml-4 bg-[var(--bg-surface)] rounded-full transition-colors duration-300">
                <h1 className="text-[var(--text-primary)]">Kevinruangrad.</h1>
                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-10">
                        <li className="hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer">
                            <Link
                                to="#work"
                                className="text-[var(--text-primary)]"
                            >
                                Projects.
                            </Link>
                        </li>
                        <li className="hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer">
                            <a
                                href="/Kevin_Ruangrad_CV_frontend.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[var(--text-primary)]"
                            >
                                Work./Education.
                            </a>
                        </li>
                        <li>
                            <button
                                onClick={() => setAboutModalOpen(true)}
                                className="hover:text-[var(--accent-color)] transition-colors duration-200 cursor-pointer text-[var(--text-primary)]"
                            >
                                About Me.
                            </button>
                        </li>
                    </ul>
                    <ThemeToggle />
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
