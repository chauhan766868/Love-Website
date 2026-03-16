import {useEffect} from "react"

export default function Intro({done}){

useEffect(()=>{

setTimeout(()=>{
done()
},5000)

},[])

return(

<div className="intro">

<h1>Our Love Story</h1>
<p>Started In 3rd Class</p>
<p>Still Going Strong ❤️</p>

</div>

)

}