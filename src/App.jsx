import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import { Flexboxes } from "./components/Flexboxes.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { HashRouter } from "react-router-dom";
import Lenis from "lenis";
import "./styles/style.css";

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
    console.log(e);
});

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        globalThis.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleVisibility = () => {
        if (globalThis.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        globalThis.addEventListener("scroll", toggleVisibility);
        return () => {
            globalThis.removeEventListener("scroll", toggleVisibility);
        };
    });

    return (
        <div className="body-container relative">
            <div className="noise"></div>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Flexboxes />} />
                    {/* Add more routes here as needed */}
                </Routes>
                <AnimatePresence>
                    {isVisible && (
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.1 }}
                            className="fixed bottom-4 right-8 bg-[#ff5e1a] text-white rounded-full p-4 shadow-lg hover:bg-[#e04e14] transition duration-100"
                            onClick={scrollToTop}
                        >
                            <FontAwesomeIcon icon={faAngleUp} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </HashRouter>
        </div>
    );
}

export default App;
