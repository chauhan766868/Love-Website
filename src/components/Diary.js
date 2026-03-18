import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export default function Diary(){

const [text,setText] = useState("");
const [entries,setEntries] = useState([]);

useEffect(()=>{

const unsub = onSnapshot(collection(db,"diary"),(snapshot)=>{
setEntries(snapshot.docs.map(doc=>doc.data()));
});

return ()=>unsub();

},[]);

const saveData = async ()=>{

if(text.trim() === "") return;

await addDoc(collection(db,"diary"),{
message:text,
time:new Date().toLocaleString()
});

setText("");

};

return(

<div className="diary">

<h2>💌 Our Love Diary</h2>

<div className="diary-box">

<textarea
placeholder="Write your feelings ❤️..."
value={text}
onChange={(e)=>setText(e.target.value)}
></textarea>

<button onClick={saveData}>Save ❤️</button>

</div>

<div className="entries">

{entries.map((item,index)=>(
<div key={index} className="entry">
<p>{item.message}</p>
<span>{item.time}</span>
</div>
))}

</div>

</div>

);

}