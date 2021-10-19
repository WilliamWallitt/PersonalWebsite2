import React from "react";
import "./Tag.css"
import "../HomePage/Title.scss"


export default function TagComponent(props) {

    return (

        props.backgroundColor === undefined ?

            <div className="tag bg-white">
                <p data-heading="" id="menu">
                    {props.name}
                </p>
            </div> :

            <div className="tag" style={{backgroundColor: props.backgroundColor, color: props.color, fontSize: props.fontSize}}>
                <p data-heading="" id="menu">
                    {props.name}
                </p>
            </div>

    )

}