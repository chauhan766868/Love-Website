import { useEffect, useState } from "react";
import "../App.css";

export default function Counter(){

const startDate = new Date("2017-04-10"); // apni love start date dal sakte ho

const [days,setDays] = useState(0);

useEffect(()=>{

const today = new Date();

const diff = today - startDate;

const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

let count = 0;

const counter = setInterval(()=>{

count++;

setDays(count);

if(count >= totalDays){
clearInterval(counter);
}

},5);

},[]);

return(

<section className="counter">

<div className="counter-hearts">
❤️ ❤️ ❤️
</div>

<h2>Days Of Our Love</h2>

<div className="counter-box">

<span>{days}</span>

<p>Days Together ❤️</p>

</div>

</section>

);

}