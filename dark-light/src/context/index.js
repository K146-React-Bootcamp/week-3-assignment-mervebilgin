import { useState } from "react";

// I included create context method from react
import { createContext } from "react";

// createContext method is used to create context
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

  // Initially, false was used because our darkmod was not turned on.
  const [darkMode, setDarkMode] = useState(false);

  /**
   * We will create a context for that one 
   * we will name a dark mode context create context and import that one from the react.
   */
  return (

    // And we will use darkmodecontext.provider and inside that it takes value 

    /*
     The context structure wants to tell us that,
     Passing the values given in the context to each component called under the context
     */

    //Here i want to provider our darkMode and SetDarkMode values.
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}> 
      {children}
    </DarkModeContext.Provider>
  );
};
