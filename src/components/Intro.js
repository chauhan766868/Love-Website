import { useEffect, useState } from "react";
import "../App.css";

export default function Intro({ done }) {

const text = "Welcome To Our Love Story ❤️";
const [displayText,setDisplayText] = useState("");

useEffect(()=>{

let i = 0;

const typing = setInterval(()=>{

setDisplayText(text.slice(0,i));

i++;

if(i > text.length){
clearInterval(typing);
}

},80);

setTimeout(()=>{
done();
},4000);

return ()=>clearInterval(typing);

},[]);

return(

<section className="intro">

<div className="intro-bg"></div>

<div className="intro-content">

<h1>{displayText}</h1>

<p>Every moment with you is my favorite memory 💖</p>

</div>

</section>

);

}