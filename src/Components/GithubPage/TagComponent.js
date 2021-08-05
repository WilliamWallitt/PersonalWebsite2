import React from "react";
import "./Tag.css"
import "../HomePage/Title.scss"


export default function TagComponent(props) {

    return (

        props.backgroundColor === undefined ?

            <div className="tag bg-white">
                <h1 data-heading="" id="menu" className={props.fontSize !== null ? props.fontSize: "lead"}>
                    {props.name}
                </h1>
            </div> :

            <div className="tag" style={{backgroundColor: props.backgroundColor}}>
                <h1 data-heading="" id="menu" className={props.fontSize !== null ? props.fontSize: "lead"}>
                    {props.name}
                </h1>
            </div>

    )

}