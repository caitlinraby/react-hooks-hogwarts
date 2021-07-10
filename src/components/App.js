import React, {useState, useEffect} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Allpigs from "./Allpigs";

//return value of useState
function App() {
  const [pigs, setPigs] = useState([]);
  const [counter, setCounter] = useState(0);
  const [greeting, setGreeting] = useState("hello");

  useEffect(() => {
    setGreeting(greeting + "!");
  }, [counter])

  useEffect(() => {
    setPigs(hogs)

  }, [])
  function handleClick(){
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      
      <Nav />

      <h1>{counter}</h1>
      <button onClick={handleClick}>Increase Count</button>
      <h2>{greeting}</h2>
      <Allpigs hogs={pigs}/>
    </div>
  );
}

export default App;
