import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import {Button} from "react-bootstrap";
import TagComponent from "../GithubPage/TagComponent";

export default class AlbumPlayer extends React.Component{

    state = {
        show_track: false
    }

    onClickHandler = () => {
        let show = this.state.show_track
        this.setState({
            show_track: !show
        })
    }

    render() {

        if (!this.state.show_track) {
            return (
                <ListGroup.Item>
                    <code>
                        <TagComponent
                            name={this.props.item} fontSize="lead"/>
                    </code>
                    <strong><br/>{this.props.item2}</strong>
                    {this.props.item1 ? " Created At: " + this.props.item1.slice(0, 7) : ""} <br/><br/>
                    <Button variant={"outline-dark"} className="btn-sm" onClick={this.onClickHandler}>Play Song</Button>
                </ListGroup.Item>
            )
        }

        return (
            <ListGroup.Item><iframe className="shadow-lg" title="Playlist" height='80' src={this.props.src} style={{width: '100%', overflow:'hidden'}} frameBorder="0" allow="encrypted-media"/><br/><Button variant={"outline-dark"} className="btn-sm" onClick={this.onClickHandler}>Back</Button> </ListGroup.Item>
        );
    }

}