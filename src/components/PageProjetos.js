import { createContext, useState, React } from "react";
import ReactSwitch from 'react-switch';
import { ReactDOM } from 'react';
import  './pages/css/Teste.css';

export const ThemeContext = createContext(null);

function Testando() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (


        <div >
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <div id={theme}>
                    <h5 >lala {theme} </h5>
                    <div className="switch">
                        <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                    </div>
                </div>

            </ThemeContext.Provider>   </div>)
}
export default Testando; 
