import React from "react";
import "./Tag.css"

export default function TagComponent(props) {

    return (

        props.backgroundColor === undefined ?

            <div className="tag bg-white">
                <h1 className={props.fontSize !== undefined ? props.fontSize: "lead"}>
                    {props.name}
                </h1>
            </div> :

            <div className="tag" style={{backgroundColor: props.backgroundColor}}>
                <h1 className={props.fontSize !== undefined ? props.fontSize: "lead"}>
                    {props.name}
                </h1>
            </div>



        // <div className={props.backgroundColor === undefined ? "tag bg-white" : "tag"}>
        //     <h1 className={props.fontSize !== undefined ? props.fontSize: "lead"}>
        //         {props.name}
        //     </h1>
        // </div>

    )

}