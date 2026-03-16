import {useEffect,useState} from "react"

export default function Counter(){

const startDate = new Date("2016-01-01")

const [days,setDays] = useState(0)

useEffect(()=>{

const now = new Date()
const diff = now - startDate

setDays(Math.floor(diff/(1000*60*60*24)))

},[])

return(

<div className="counter">

<h2>Together For</h2>
<h1>{days} Days ❤️</h1>

</div>

)

}