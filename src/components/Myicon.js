import React from "react";
import '../styles/Myicon.css';
import './One';
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

const Myicon = (props) => {

    console.log(props.option);

    return (
        <>
            {props.option == 0 ? <One /> : 
            props.option == 1 ? <Two /> : 
            props.option == 2 ? <Three /> :
            props.option == 3 ? <Four /> :
            <Five />
            }
        </>
    );
}

export default Myicon;