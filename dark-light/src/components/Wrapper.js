// We use the useContext hook to access context values in functional components.
// This hook takes the context we created as a parameter.

import React, { useContext } from "react";

// We import our Header and Hero components.
import Header from "./Header";
import Hero from "./Hero";

import { DarkModeContext } from "../context";

export default function Wrapper() {

  // To reach darkmode, darkMode and setDarkMode are needed.
  // We get our data from context in
  // With useContext, we were able to access the values of both AuthContext and ThemeContext contexts.
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  console.log("from wrapper", darkMode);

  return (
    <section
      style={{
        backgroundColor: darkMode ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <Header />
      <Hero />
    </section>
  );
}
