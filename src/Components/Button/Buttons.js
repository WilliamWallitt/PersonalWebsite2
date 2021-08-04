import React from "react";
import "./Button.css"

export default function ButtonComponent(props) {

    return (

        <div className="button">
            <h1 className="lead">{props.name}</h1>
        </div>

    )

}