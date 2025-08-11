// import React from 'react'
// import { createContext, useContext, useState } from 'react';
// export const ThemeContext = createContext();

// const ThemeProvider = ({children}) => {
//     const [theme, setTheme] = useState('light');
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error('useTheme must be used within a ThemeProvider');
//     }
//     return context;
//     ;
// }

// export default ThemeProvider



import { createContext, use, useState } from "react";

export const Theme = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	return (
		<Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
	);
};

export const useTheme = () => {
	const themeContextValue = use(Theme);
	if (!themeContextValue) {
		throw new Error("useTheme must be used within an ThemeProvider");
	}
	return themeContextValue;
};

export default ThemeProvider;

