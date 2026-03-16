import React, { useState } from "react";
import "../App.css";

export default function Password({ onUnlock }) {

const [password,setPassword] = useState("");

const checkPassword = () => {

if(password === "18/4/2018"){
onUnlock();
}else{
alert("Wrong password ❤️");
}

};

return(

<div
className="password"
style={{
backgroundImage:`url(${process.env.PUBLIC_URL}/images/h3.jpg)`,
backgroundSize:"cover",
backgroundPosition:"center"
}}
>

<div className="password-box">

<h1>Enter Our Secret Password ❤️</h1>

<input
type="password"
placeholder="Enter password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={checkPassword}>
Unlock ❤️
</button>

</div>

</div>

);

}