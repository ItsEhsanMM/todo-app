import React, { useState } from "react";

// elements
import { FailButton } from "../tailwind/button";

// icon
import arrow from "../assets/arrowDown.svg";

const Items = ({ value }) => {
   const [opened, setOpened] = useState(false);

   return (
      <div>
         <li className="mb-6 xl:mb-12 flex h-[50px] xl:h-[80px] xl:w-[850px] w-[353px] justify-between rounded-lg border border-black bg-white py-3 pl-4 xl:px-8 text-base xl:text-4xl xl:py-5 text-black shadow-md">
            {value}
            <button className="pr-4" onClick={() => setOpened(!opened)}>
               <img src={arrow} alt="arrow" className="h-full w-full" />
            </button>
         </li>
         <div>
            {opened && (
               <div className="h-16 animate-slide">
                  <FailButton value={value}>remove</FailButton>
               </div>
            )}
         </div>
      </div>
   );
};

export default Items;
