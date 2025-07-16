import { Key } from "lucide-react";
import { useEffect, useState } from "react";

export default function StarBackground(){

    const[stars,setStars] = useState([]);
    const[meteors,setMeteors]= useState([]);

    useEffect(()=>{
        generatestars();
        generatemeteors();

        function handleresize(){
            generatestars();
        }

        window.addEventListener("resize", handleresize);

        return()=>{
            window.removeEventListener("resize",handleresize);
        }


    },[]);


    function generatestars(){
        const numberofstars = Math.floor((window.innerWidth * window.innerHeight)/ 9000);

        const newstars = []

        for(let i=0;i<numberofstars;i++)
        {
            newstars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random()*100 ,
                y: Math.random()*100 ,
                opacity: Math.random() * 0.5+0.5,
                animationduration: Math.random() * 4 + 2,
            });
        }

        setStars(newstars);


    };


    function generatemeteors(){
        const numberofmeteors = 5;

        const newmeteors = []

        for(let i=0;i<numberofmeteors;i++)
        {
            newmeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random()*100 ,
                y: Math.random()*20 ,
                opacity: Math.random() * 15,
                animationduration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newmeteors);


    };




    return(
       <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {stars.map((star)=>(
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
            }}
            />
          ))}

          {meteors.map((meteor)=>(
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size *50+ "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
            }}
            />
          ))}
       </div>

        




    );
}