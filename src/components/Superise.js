import {useState} from "react"

export default function Surprise(){

const [show,setShow] = useState(false)

return(

<div className="surprise">

<button onClick={()=>setShow(true)}>
Click For Surprise ❤️
</button>

{show &&

<div className="proposal">

<h1>Will You Stay With Me Forever ❤️</h1>

<div className="fireworks">

🎆 🎆 🎆

</div>

</div>

}

</div>

)

}