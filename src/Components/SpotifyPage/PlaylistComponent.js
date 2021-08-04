import React from 'react'
import {Card, ListGroup} from "react-bootstrap";
import * as $ from "jquery";
import AlbumPlayer from "./AlbumPlayer";
import TagComponent from "../GithubPage/TagComponent";

export default class PlaylistComponent extends React.Component {

    state = {
        playlist: {
            displayTracks: false,
            image: null,
            name: null,
            description: null
        },
        trackList: {
            track_url: null,
            tracks: []
        },
        play_track: false
    }


    componentDidMount() {


        this.setState({
            playlist: {
                displayTracks: false,
                image: this.props.image,
                name: this.props.name,
                description: this.props.description
            },
            trackList: {
                track_url: this.props.url,
                tracks: []
            }
        })

        $.ajax({
            url: this.props.url,
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.props.token);
            },
            success: data => {
                // console.log(data)
                let items = data.items
                let track_list = []

                // eslint-disable-next-line array-callback-return
                items.map(item => {

                    let artist_song = []
                    // item.track.uri
                    if (item.track !== null) {
                        artist_song.push(item.track.name)

                        if (item.track.artists !== null) {
                            for (let i = 0; i < item.track.artists.length; i++) {
                                artist_song.push(item.track.artists[i].name)
                            }
                        }

                        artist_song.push("https://open.spotify.com/embed/track/" + item.track.uri.slice(14))
                    }

                    track_list.push(artist_song)

                })

                this.setState(prevState => ({
                    trackList: {
                        ...prevState.trackList,
                        tracks: track_list
                    }
                }))

            }
        })

    }


    onClickHandler = () => {
        let value = this.state.playlist.displayTracks
        
        // eslint-disable-next-line react/jsx-pascal-case
        this.setState(prevState => ({
            playlist: {
                ...prevState.playlist,
                displayTracks: !value
            }
        }))

    }

    render() {

        if (this.state.playlist.displayTracks) {
            return (
                <Card className="shadow-lg border-dark text-center mt-5" style={{ width: '100%'}}>
                    <Card.Title onClick={this.onClickHandler} className="lead mt-5 p-3">
                        {/*<code>{this.state.playlist.name}</code>*/}
                        <code>
                            <TagComponent
                                name={this.state.playlist.name} fontSize="lead"/>
                        </code>
                    </Card.Title>
                    <Card.Body>
                        <ListGroup style={{height: "30vh", overflow: "auto"}}>
                            {this.state.trackList.tracks.map( (item, index) => (

                                <AlbumPlayer
                                    key={index}
                                    item={item[0]}
                                    item2={item[1]}
                                    src={item.slice(-1)}
                                />
                                ))}
                        </ListGroup>
                    </Card.Body>
                </Card>

                )
        }

        return (
                <Card className="shadow-lg border-dark text-center mt-5" onClick={this.onClickHandler} style={{ width: '100%'}}>
                    <Card.Img variant="top" src={this.state.playlist.image} />
                    <Card.Body>

                        <Card.Title>
                            <code>
                                <TagComponent
                                    name={this.state.playlist.name} fontSize="lead"/>
                            </code>
                        </Card.Title>

                        <Card.Text>
                            {this.state.playlist.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            )

    }


}