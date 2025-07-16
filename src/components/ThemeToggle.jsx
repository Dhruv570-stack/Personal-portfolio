import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { cn } from "../lib/Utils";

export default function ThemeToggle(){

    const [isDarkmode, setIsDarkMode] = useState(false);

   function toogle(){
        if(isDarkmode){
            document.documentElement.classList.remove("dark");
             localStorage.setItem("theme","light");
            setIsDarkMode(false);
        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setIsDarkMode(true);
        }
   
    }


    useEffect(()=>{
        const storedtheme = localStorage.getItem("theme");
        if(storedtheme === "dark")
        {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
        else{
            localStorage.setItem("theme","dark");
            setIsDarkMode(false);
        }
    },[])
    




    return(
        <button onClick={toogle} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors durartion-300","focus: outline-hidden")}>
            {isDarkmode ? <Sun className="h-6 w-6 text-yellow-300" />:<Moon className="h-6 w-6 text-blue-300"/>}
        </button>
    )
}

