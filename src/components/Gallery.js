import React, { useState } from "react";
import "../App.css";

const gfPhotos = [
{
img:"/images/p1.jpg",
text:"तुम्हारी मुस्कान मेरे हर दिन को रोशन कर देती है ❤️"
},
{
img:"/images/p2.jpg",
text:"तुम्हारी आँखों में वो जादू है जो मुझे हर बार तुमसे और प्यार करा देता है 💖"
},
{
img:"/images/p3.jpg",
text:"तुम इतनी खूबसूरत हो कि चाँद भी तुमसे जलने लगे 🌙❤️"
}
];

const couplePhotos = [
{
img:"/images/l.jpg",
text:"हम साथ हों तो हर पल किसी खूबसूरत कहानी जैसा लगता है 💑"
},
{
img:"/images/l1.jpg",
text:"तुम्हारे साथ बिताया हर पल मेरी जिंदगी का सबसे खूबसूरत हिस्सा है ❤️"
}
];

const anniversary = [
{
img:"/images/anni.jpg",
text:"हमारी पहली anniversary... वो दिन जब मैंने महसूस किया कि तुम ही मेरी दुनिया हो 💍❤️"
}
];

export default function Gallery(){

const [selected,setSelected]=useState(null);

const openPopup = (item)=>{
setSelected(item);

setTimeout(()=>{
const audio=document.getElementById("loveMusic");
if(audio) audio.play();
},200);
}

const closePopup = ()=>{
setSelected(null);
}

return(

<div className="gallery">

<h2>My Beautiful Girl ❤️</h2>

<div className="grid">
{gfPhotos.map((item,index)=>(
<img
key={index}
src={item.img}
alt=""
onClick={()=>openPopup(item)}
/>
))}
</div>

<h2>Our Lovely Moments 💑</h2>

<div className="grid">
{couplePhotos.map((item,index)=>(
<img
key={index}
src={item.img}
alt=""
onClick={()=>openPopup(item)}
/>
))}
</div>

<h2>First Anniversary 💍</h2>

<div className="grid">
{anniversary.map((item,index)=>(
<img
key={index}
src={item.img}
alt=""
onClick={()=>openPopup(item)}
/>
))}
</div>

{selected && (

<div className="popup">

<div className="popup-box">

<div className="hearts-explosion">
<span>❤️</span>
<span>💖</span>
<span>💘</span>
<span>💕</span>
<span>💓</span>
</div>

<img src={selected.img} alt="" />

<p>{selected.text}</p>

<button onClick={closePopup}>Close ❤️</button>

<audio id="loveMusic" src="/Music\Luka_Chuppi_-_Duniya_(mp3.pm).mp3" />

</div>

</div>

)}

</div>

);

}