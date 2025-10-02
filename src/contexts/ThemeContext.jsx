import { useState, useEffect } from "react";
import ThemeContext from "./theme-context.js";

const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        // Check for saved theme preference or default to dark mode
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDarkMode(savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        // Save theme preference and apply CSS classes
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        if (isDarkMode) {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    const theme = {
        colors: {
            // Dark mode colors (current)
            dark: {
                background: "#000000",
                surface: "#131315",
                text: "#ffffff",
                accent: "#ff5e1a",
                accentHover: "#e04e14",
            },
            // Light mode colors
            light: {
                background: "#ffffff",
                surface: "#f8f9fa",
                text: "#1a1a1a",
                accent: "#32cd32", // Lime green
                accentHover: "#28a428",
            },
        },
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkMode,
                toggleTheme,
                theme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

// Add prop validation
ThemeProvider.propTypes = {
    children: "node",
};

export default ThemeProvider;
