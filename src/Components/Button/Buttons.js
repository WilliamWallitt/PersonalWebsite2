import React from "react";
import "./Button.css"

export default function ButtonComponent(props) {

    return (

        props.backgroundColor === undefined ?
        <div className="button">
            <h1 className="lead">{props.name}</h1>
        </div> :

        <div className="button" style={{backgroundColor: props.backgroundColor}}>
            <h1 className="lead">{props.name}</h1>
        </div>


    )

}