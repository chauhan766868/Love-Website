import { useState } from "react";
import "../App.css";

export default function Surprise(){

const [show,setShow] = useState(false);

return(

<section className="surprise">

<button 
className="surprise-btn"
onClick={()=>setShow(true)}
>
Click For Surprise ❤️
</button>

{show &&

<div className="proposal">

<div className="proposal-card">

<h1>Will You Stay With Me Forever ❤️</h1>

<p>
तुम मेरी जिंदगी की सबसे खूबसूरत कहानी हो 🌹  
और मैं चाहता हूँ कि ये कहानी हमेशा चलती रहे 💖
</p>

<div className="proposal-hearts">
❤️ 💖 💕 💗 💘
</div>

<div className="fireworks">
🎆 🎆 🎆 🎆
</div>

</div>

</div>

}

</section>

)

}