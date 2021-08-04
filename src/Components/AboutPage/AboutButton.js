import React from "react";
import "./AboutButton.css"

export default function AboutButtonComponent(props) {

    return (

        props.backgroundColor === undefined ?

            <div className="about bg-white">
                <h1 className={props.fontSize !== undefined ? props.fontSize: "h6"}>
                    {props.name}
                </h1>
            </div> :

            <div className="tag" style={{backgroundColor: props.backgroundColor}}>
                <h1 className={props.fontSize !== undefined ? props.fontSize: "lead"}>
                    {props.name}
                </h1>
            </div>


    )

}