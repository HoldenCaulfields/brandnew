import React from "react";
import '../styles/Underbar.css';
import me from '../images/me.png'
import ink from '../images/in.png';
import oc from '../images/oc.png';
import ts from '../images/ts.png';
import wp from '../images/wp.png';
import Myicon from "./Myicon";
import { useState } from "react";

const Underbar = () => {

    const listimages = [me, ink, wp, ts, oc];

    const [pic, setPic] = useState('');

    const handleClick = (e) => {
        // console.log(e.target.id);
        document.getElementsByClassName('icons')[0].classList.toggle("another-icons");
        setPic(e.target.id);
        
    }

    return (
        <>
            <ul>
                {listimages.map(
                    (myimg, index) => <img src={myimg} key={index} id={index} onClick={handleClick} />
                )}
            </ul>

            <div className="icons">
                    <Myicon option={pic} />
            </div>
        </>
        

    );
}

export default Underbar;