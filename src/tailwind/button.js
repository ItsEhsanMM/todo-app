//context
import { useContext } from "react";
import { itemContext } from "../context/ItemContextProvider";

export const FailButton = ({ children, value }) => {
   const { dispatch } = useContext(itemContext);

   return (
      <button
         onClick={() => dispatch({ type: "REMOVE", payload: value })}
         className="h-8 xl:text-3xl xl:h-14  xl:mt-[-20px] w-full rounded-lg  border-none bg-red text-white outline-none"
      >
         {children}
      </button>
   );
};
