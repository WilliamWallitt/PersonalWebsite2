import React from "react";
import "./AboutButton.css"

export default function AboutButtonComponent(props) {

    return (

        props.backgroundColor === undefined ?

            <div className="about" style={{backgroundColor: "#570861"}}>
                <h1 className={props.fontSize !== undefined ? props.fontSize: "small h6 text-white"}>
                    {props.name}
                </h1>
            </div> :

            <div className="tag" style={{backgroundColor: props.backgroundColor}}>
                <h1 className={props.fontSize !== undefined ? props.fontSize: "small h6"}>
                    {props.name}
                </h1>
            </div>


    )

}