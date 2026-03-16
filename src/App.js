import { useState } from "react";
import Password from "./components/Password";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Letter from "./components/LoveLetter";
import Counter from "./components/Counter";
import Surprise from "./components/Superise";
import Hearts from "./components/Hearts";
import Music from "./components/Music";

import "./App.css";

function App() {

const [unlocked,setUnlocked] = useState(false);
const [introDone,setIntroDone] = useState(false);

if(!unlocked){
  return <Password onUnlock={()=>setUnlocked(true)} />
}

if(!introDone){
  return <Intro done={()=>setIntroDone(true)} />
}

return(

<div>

<Music/>
<Hearts/>

<Hero/>
<Counter/>
<Story/>
<Gallery/>
<Timeline/>
<Letter/>
<Surprise/>

</div>

)

}

export default App;