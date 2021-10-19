import React from "react";
import ButtonComponent from "../Button/Buttons";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import TagComponent from "../GithubPage/TagComponent";

export default function LanguageComponent(props) {

    // two props, current language and libraries / skills learnt
    // user onlick means show current skills

    const [showInfo, updateShowInfo] = React.useState(false)

    function onClickHandler() {
        updateShowInfo(!showInfo)
    }

    return (

        showInfo === false ?
            <div onClick={onClickHandler}><ButtonComponent name={props.language}/></div> :
            props.skills.length > 0 ?
            <ListGroup variant="flush" className="bg-transparent d-flex flex-wrap my-3" horizontal>
                <div onClick={onClickHandler}><ButtonComponent name={props.language}/></div> :
                {props.skills.map(skill => {
                    return <div onClick={onClickHandler} className="text-white">
                        <TagComponent name={skill} backgroundColor="white"/>
                    </div>
                })}
            </ListGroup> : <div onClick={onClickHandler}><ButtonComponent name={props.language}/></div>


    )


}