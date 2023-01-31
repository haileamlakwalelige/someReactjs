import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import "./App.css";
function App() {
//  const [apple,setApple]=useState("Banana");
  return (
   <div>
   <h1>Home page</h1>
    {/* <h1>Hello this is {apple}</h1>
    <button type='button' onClick={()=>{setApple("Apple")}}>Apple</button> 
    <button type='button' onClick={()=>{setApple("Banana")}}>Banana</button> */}
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Contact />} />
        </Routes>
   </div>
  )
}

export default App;
