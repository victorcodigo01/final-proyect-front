import { createContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");
    

    const toggleTheme = () => {
        // setTheme(theme === "light" ? "dark" : "light");
       theme === "light" ? setTheme("dark") : setTheme("light");
    }
    // themeContext.Provider = { theme, toggleTheme };

 return <themeContext.Provider value={{ theme,toggleTheme }}> {children}
 </themeContext.Provider>;
}

export  {themeContext, ThemeProvider};