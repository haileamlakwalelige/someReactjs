import React from 'react';
import {useNavigate} from 'react-router-dom';
import Contact from './Contact';
import {Route,Routes} from 'react-router-dom';

function Home(){

    const navigate =useNavigate();
    function handleClick(){
        navigate("./Contact")
    }
    return(
        <div>
            <button onClick={(e)=>handleClick()}>Redirect</button>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Contact />} />
        </Routes>
        </div>
    )
}
export default Home;