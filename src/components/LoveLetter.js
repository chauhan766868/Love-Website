import {useState,useEffect} from "react"

export default function Letter(){

const text = "No matter how far we are, my heart always belongs to you ❤️"

const [show,setShow] = useState("")

useEffect(()=>{

let i=0

const interval = setInterval(()=>{

setShow(text.slice(0,i))
i++

if(i>text.length) clearInterval(interval)

},50)

},[])

return(

<div className="letter">

<h2>My Love Letter</h2>
<p>{show}</p>

</div>

)

}