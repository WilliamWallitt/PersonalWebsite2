import React from 'react'
import * as $ from "jquery"
import {Card, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PlaylistComponent from "./PlaylistComponent";
import ListGroup from "react-bootstrap/ListGroup";
import AlbumPlayer from "./AlbumPlayer";
import SearchPlaylistComponent from "./SearchPlaylistComponent";
import TagComponent from "../GithubPage/TagComponent";
import backgroundImage from "../../Assets/spotifyHomePage.jpg";


export default class Spotify_Playlist extends React.Component {

    state = {
        access_token: null,
        refresh_token: null,
        scope: null,
        user_data: null,
        playlist_data: null,
        recently_played: null
    }

    async componentDidMount() {

        await this.setState({
            access_token: this.props.access_token,
            refresh_token: this.props.refresh_token,
            scope: this.props.scope
        })

        $.ajax({
            url: "https://api.spotify.com/v1/me",
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.state.access_token);
            },
            success: data => {
                this.setState({
                    user_data: data
                })
            }
        })

        $.ajax({
            url: "https://api.spotify.com/v1/me/playlists",
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.state.access_token);
            },
            success: data => {
                this.setState({
                    playlist_data: data
                })

            }
        })

       this.onRecentlyPlayedHandler()
    }


    get_spotify_data = async (url, token) => {

        let returned_data = null

        returned_data = $.ajax({
            url: url,
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            }
        })

        return returned_data

    }


    onRecentlyPlayedHandler = () => {

        let _self = this
        this.get_spotify_data("https://api.spotify.com/v1/me/player/recently-played", this.state.access_token).then((data) => {

            let items = data.items
            let arr_data = []

            for (let i = 0; i < items.length; i++) {

                let track_uri_link = items[i].track.uri.slice(14)

                let item_data = []
                item_data.push(items[i].track.name)
                item_data.push(items[i].played_at)

                if (items[i].track.artists !== null) {
                    for (let j = 0; j < items[i].track.artists.length; j++) {
                        item_data.push(items[i].track.artists[j].name)
                    }
                }

            item_data.push("https://open.spotify.com/embed/track/" + track_uri_link)

                arr_data.push(item_data)
            }

            return arr_data

        }).then(function(data) {
            _self.setState({
                recently_played: data
            })
        })
    }

    display_playlist_data_handler = () => {

        let playlist_data = this.state.playlist_data

        if (playlist_data === null) {
            return <img src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif" alt="loading..." style={{width: "100%", height: "100%"}}/>

        } else {

            let playlists = playlist_data.items

            return (

                <Container fluid>
                    <Container fluid className="mt-3 p-3 text-center">
                        <Container fluid className="p-3 my-2 text-center w-50 mx-auto">
                            <h1 className="display-5"><TagComponent
                                name="Playlists" fontSize="h1"/></h1>
                        </Container>
                        {/*<h1 className="display-5">Playlists</h1>*/}
                        <h1 className="lead">You can click on each playlist to see what songs are in them!</h1>
                    </Container>

                    <Row>
                        {playlists.map((item, index) => (
                            window.innerWidth > 690 ?
                            <Col className="col-4" key={index}>
                                <PlaylistComponent
                                    image={item.images[0] !== undefined ? item.images[0].url : null}
                                    name={item.name}
                                    description={item.description}
                                    url={item.tracks.href}
                                    token={this.state.access_token}
                                />
                            </Col> :
                                <PlaylistComponent
                                    image={item.images[0].url}
                                    name={item.name}
                                    description={item.description}
                                    url={item.tracks.href}
                                    token={this.state.access_token}
                                />
                        ))}
                    </Row>
                </Container>
            )
        }
    }

    display_user_data_handler = () => {

        let user_data = this.state.user_data
        let current_songs = this.state.recently_played

        if (user_data === null || current_songs === null) {
            return <img src="https://media.giphy.com/media/feN0YJbVs0fwA/giphy.gif" alt="loading..." style={{width: "100%", height: "100%"}}/>
        } else {

            return (

                // <Container className="text-center">
                <Container fluid style={{width: "100%", height: "100%", backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover",
                    backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"
                }}>
                    <Col>
                        <Row className="d-flex justify-content-center">

                            <Card className="mt-5 bg-transparent">
                                <Card.Img variant="top" src={user_data.images[0].url} style={{width: '18rem', backgroundColor: "#eeff1f"}}
                                          className="mx-auto m-2 rounded"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        <code>
                                            <TagComponent
                                            name={user_data.display_name + " : " + user_data.country} fontSize="h3"/>
                                        </code>
                                    </Card.Title>
                                    {/*<Card.Text>*/}
                                    {/*    <h1 className="lead">*/}
                                    {/*        {user_data.email}*/}
                                    {/*    </h1>*/}
                                    {/*</Card.Text>*/}
                                    {/*<Button variant="outline-dark">*/}
                                    {/*    <code>Followers:</code> {user_data.followers.total}*/}
                                    {/*</Button>*/}
                                    <code>
                                        <TagComponent
                                            name={"Followers: " + user_data.followers.total} fontSize="lead"/>
                                    </code>
                                </Card.Body>
                            </Card>

                        </Row>

                        <Row className="d-flex justify-content-center my-5">

                            <Container fluid className="p-3 my-2 text-center w-50 mx-auto">
                                <h1 className="display-5"><TagComponent
                                    name="Recently Played" fontSize="h1"/></h1>
                            </Container>

                            {<ListGroup style={{height: "70vh", width: "70vw", overflow: "auto"}}>
                                {current_songs.map((item, index) => (
                                    <AlbumPlayer key={index} item={item[0]} item1={item[1]} item2={item[2]} src={item.slice(-1)}/>
                                ))}
                            </ListGroup>}`
                        </Row>
                    </Col>

                </Container>

            )

        }

    }

    render() {

        return <Container fluid className="bg-light">
            <Col>
                {/*<Row className="p-3 m-5 my-auto">*/}
                {/*    <SearchPlaylistComponent/>*/}
                {/*</Row>*/}
                <Row className="d-flex justify-content-center">
                    {this.display_user_data_handler()}
                </Row>
                <Row className="d-flex justify-content-center">
                    {this.display_playlist_data_handler()}
                </Row>
            </Col>
        </Container>
    }

}
