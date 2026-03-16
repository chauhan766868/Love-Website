import "../App.css";
import { useEffect, useState } from "react";

export default function Hero(){

const text = "Our Love Story ❤️";
const [displayText,setDisplayText] = useState("");

useEffect(()=>{

let i = 0;

const typing = setInterval(()=>{

setDisplayText(text.slice(0,i));

i++;

if(i > text.length){
clearInterval(typing);
}

},100);

return ()=>clearInterval(typing);

},[]);

return(

<section className="hero">

<div className="stars"></div>

<div className="hero-content">

<div className="hero-hearts">
❤️ ❤️ ❤️ ❤️ ❤️
</div>

<h1>{displayText}</h1>

<p>From Childhood To Forever</p>

</div>

</section>

);

}