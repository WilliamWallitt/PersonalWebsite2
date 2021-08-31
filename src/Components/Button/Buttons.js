import React from "react";
import "./Button.css"
import "../HomePage/Title.scss"

export default function ButtonComponent(props) {

    return (

        props.backgroundColor === undefined ?
        <div className="button">
            <h1 className="lead" data-heading="" id="menu">{props.name}</h1>
        </div> :

        <div className="button" style={{backgroundColor: props.backgroundColor}}>
            <h1 className="lead" data-heading="" id="menu">{props.name}</h1>
            {props.children}
        </div>


    )

}