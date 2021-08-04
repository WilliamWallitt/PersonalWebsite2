import React from 'react'
import {Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import WallpaperSpotify from "../../Assets/spotifyHomePage.jpg"


import * as $ from "jquery"
import Spotify_Playlist from "./Spotify_Playlist";
import ButtonComponent from "../Button/Buttons";
const queryString = require("query-string")

const image_styling = {

    backgroundImage: "url(" + WallpaperSpotify + ")",
    height: "95vh",
    width: "100vw",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

}

// our main spotify endpoint
const clientId = "26ec544d2c734f7a93baacf81d15bd7e";
const clientSecret = "76299d326a5a4ee582ed5e104b4a180e";

let redirectUri = "http://localhost:3000/spotify"

if (window.location.href.toString().substr(0, 29) !== "http://localhost:3000/spotify") {
    redirectUri = "https://williamwallitt.herokuapp.com/spotify"
} else {
    redirectUri = "http://localhost:3000/spotify";
}

const scopes = 'user-read-private user-read-email playlist-read-private user-library-read playlist-read-collaborative playlist-modify-private user-read-recently-played streaming';

const redirect = 'https://accounts.spotify.com/authorize?response_type=code' +
    '&client_id=' + clientId + "&scope=" + encodeURIComponent(scopes) + '&redirect_uri=' + encodeURIComponent(redirectUri)

class SpotifyHomePage extends React.Component {

    state = {
        success: false,
        token: null,
        refresh: null,
        scope: null,
        clicked: false,
        refresh_token: false
    }

    componentDidMount() {
        this.token_handler()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.token_handler()
    }

    auth_handler = () => {

        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.code
        let _self = this

        try {
            if (localStorage.getItem("token") === null) {

                $.ajax(
                    {
                        method: "POST",
                        url: "https://accounts.spotify.com/api/token",
                        data: {
                            "grant_type":    "authorization_code",
                            "code":          accessToken,
                            "redirect_uri":  redirectUri,
                            "client_secret": clientSecret,
                            "client_id":     clientId,
                        },
                        success: function(result) {
                            _self.setState({
                                success: true,
                                token: result.access_token,
                                refresh: result.refresh_token,
                                scope: result.scope
                            })
                            localStorage.setItem('token', result.access_token)

                        }, error: function(err) {
                            console.log(err)
                        }
                    }
                )

            }

        } catch (e) {
            console.log(e)
        }


    }


    token_handler = () => {

        let date_object = new Date()

        // if we don't have a token time
        if (localStorage.getItem("time") === null) {
            console.log("no-time")
            // add one hour to current time and store it as the token expire time
            date_object.setHours(date_object.getHours() + 1)
            let current_time = date_object.getHours() + ":" + date_object.getMinutes() +  ":" +  date_object.getSeconds();
            localStorage.setItem("time", current_time)
        // if we do
        } else {

            // we get the current time and compare it - if its greater than the expire time, we need to refresh the token
            let current_time = date_object.getHours() +  ":" + date_object.getMinutes() +  ":" + date_object.getSeconds().toString()
            let expire_time = localStorage.getItem("time").toString()
            let curr_time = this.check_handler(current_time)
            let exp_time = this.check_handler(expire_time)

            console.log(curr_time, exp_time)

            if (exp_time[0] === "0") {
                exp_time[0] = "24"
            }

            let curr_hour = curr_time[0], curr_minute = curr_time[1], exp_hour = exp_time[0], exp_minute = exp_time[1]

            if ((curr_hour >= exp_hour - 1 && curr_minute > exp_minute) && curr_hour <= exp_hour){

                console.log("valid")

            } else {

                console.log("invalid")
                localStorage.removeItem("time")
                localStorage.removeItem("token")
                this.forceUpdate()
            }

        }
    }

    check_handler = time => {

        let hour = "", minute = ""

        if (time.substr(0, 2).slice(1, 2) === ":"){
            // time is 0 -> 9
            hour = time.substr(0, 1)
            time = time.substr(2, time.length)
            time.substr(0, 2).slice(1, 2) === ":" ? minute = time.substr(0, 1) : minute = time.substr(0, 2)

        } else {
            // otherwise the time is 10 - 24
            hour = time.substr(0, 2)
            time = time.substr(3, time.length)
            time.substr(0, 2).slice(1, 2) === ":" ? minute = time.substr(0, 1) : minute = time.substr(0, 2)
        }

        return [hour, minute]

    }

    render() {

        // if we have a token that hasnt expired and we have the time stored in local storage

        if (this.state.token || localStorage.getItem("token")){
            console.log("good token")
            return (

                <Spotify_Playlist
                    access_token={this.state.token === null ? localStorage.getItem("token") : this.state.token}
                    refresh_token={this.state.refresh}
                    scope={this.state.scope}
                />
            )

        } else {

            console.log("sign in")

            return (

                <Container className="d-flex text-center align-items-center justify-content-center" fluid style={{width: "100vw", height: "100vh", fontFamily: "", ...image_styling}}>

                    <Button variant="outline-none" className="bg-white text-dark p-2 m-0"  href={redirect} onClick={this.auth_handler()}>
                        <ButtonComponent name="Log into Spotify"/>
                    </Button>

                </Container>

            )
        }
    }
}



export default SpotifyHomePage

