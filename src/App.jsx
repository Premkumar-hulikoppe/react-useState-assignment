
import './App.css';
import Counter from "./components/counter";
import {useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     <h1>  Counter </h1>
     <Counter count = {count} setCount = {setCount}/>
    </div>
  );
}

export default App;
