import { createContext } from "react";

const theme = {
    melissa: {
        backgroundColor: 'white',
        color: 'black',
    },

    rider: {
        backgroundColor: 'black',
        color: 'white',
    }
} 

export const ThemeContext = createContext();

export function ThemeProvider( {children} ) {
  
  return (
    <ThemeContext.Provider
      value={{theme}}
    >
      {children}
    </ThemeContext.Provider>
  );
}