import Wrapper from "./components/Wrapper";
import "./App.css";
import { DarkModeProvider } from "./context";
function App() {
  return (
    /* provider that was the name of the dark mode provider to wrap that 
    a wrapper inside that its all the all components can access our context */

    /*
      the provider, which is the name of the dark mode provider, 
      can access our context to wrap a wrapper inside which all its components can access
    */
    <DarkModeProvider>
      <Wrapper />
    </DarkModeProvider>
  );
}

export default App;