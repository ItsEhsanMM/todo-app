import React, { createRef, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Items from "./Items";

//context
import { itemContext } from "../context/ItemContextProvider";

const Main = () => {
   const [input, setInput] = useState("");
   const [error, setError] = useState("");

   const [stateValue, setStateValue] = useState();

   const { state, dispatch } = useContext(itemContext);

   useEffect(() => {
      setStateValue(state);
   }, [state]);

   const inputHandler = (e) => {
      setInput(e.target.value);
   };

   const addHandler = () => {
      if (input) {
         dispatch({ type: "ADD_TASK", payload: input });
         setInput("");
         setError("");
         refInput.current.focus();
      } else {
         setError("Enter a valid input");
      }
   };

   const refInput = createRef();

   return (
      <div className=" relative m-0 h-screen w-[100%] bg-default">
         <div className="absolute left-[39px] top-[119px] w-80 font-semibold leading-[44px] text-white xl:left-[345px] xl:top-[119px] xl:w-[750px] xl:text-5xl xl:leading-10">
            <h1 className="text-4xl xl:text-6xl">TODO APP</h1>
         </div>

         <div className="absolute left-[38px] top-[203px] flex h-[50px] w-[353px] overflow-hidden rounded-lg xl:left-[345px] xl:top-[220px] xl:h-20 xl:w-[100%] xl:rounded-xl">
            <input
               ref={refInput}
               value={input}
               onChange={inputHandler}
               type="text"
               placeholder="Enter Task..."
               className="min-w-[290px] py-[14px] pl-4 placeholder:text-xl placeholder:text-black focus:outline-none xl:w-[700px] xl:text-3xl xl:placeholder:text-3xl"
            />
            <button
               onClick={addHandler}
               className="h-full w-[68px] rounded-r-lg border border-solid border-white py-[19px] text-[10px] font-semibold text-white xl:w-[150px] xl:text-2xl"
            >
               Add Task
            </button>
         </div>
         {error && <div className="absolute left-12 top-[265px] text-lg text-red shadow-md">{error}</div>}
         <ul className="absolute left-[38px] top-[303px] min-h-[50dvh] overflow-auto xl:left-[345px] xl:top-[378px] xl:h-[80px] xl:w-fit">
            {stateValue && stateValue.addedItem.map((item) => <Items key={uuidv4()} value={item} />)}
         </ul>
      </div>
   );
};

export default Main;
