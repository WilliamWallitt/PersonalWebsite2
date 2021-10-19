import './App.css';
import MenuComponent from "../Components/Menu/MenuComponent";
import { ChakraProvider } from "@chakra-ui/react"
import React from "react";

function App() {
  return (

      <ChakraProvider>

          <div className="App" style={{backgroundColor: `rgb(240, 231, 219)`}}>
                <MenuComponent/>
          </div>
      </ChakraProvider>
  );
}

export default App;
