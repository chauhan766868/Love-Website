import { useState } from "react";

export default function Password({ unlock }) {

  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [explode,setExplode] = useState(false);

  const correctPassword = "18/4/2018";

  const handleLogin = () => {

    if(password.trim() === correctPassword){

      setExplode(true);

      setTimeout(()=>{
        unlock();
      },2000);

    }else{
      setError("Wrong Password ❤️ Try Again");
    }

  }

  return(

  <div className="password">

    <h1>Enter Our Secret Password ❤️</h1>

    <p className="hint">
    Hint: The day our love started ❤️
    </p>

    <input
    type="password"
    placeholder="Enter Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    />

    <button onClick={handleLogin}>
    Enter
    </button>

    <p className="error">{error}</p>

    {explode &&

      <div className="heart-explosion">

        ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️

      </div>

    }

  </div>

  )

}