import React from "react";
import Main from "./components/Main";
import Contact from "./components/Contact";

// Context
import ItemContextProvider from "./context/ItemContextProvider";

const App = () => {
   return (
      <div className="min-h-[100dvh] font-inter">
         <ItemContextProvider>
            <Main />
            <Contact />
         </ItemContextProvider>
      </div>
   );
};

export default App;
