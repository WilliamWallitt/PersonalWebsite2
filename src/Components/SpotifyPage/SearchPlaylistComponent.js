import React from 'react'
import {Search} from 'semantic-ui-react'
import * as $ from "jquery";


export default class SearchPlaylistComponent extends React.Component {

    state = {
        isLoading: false,
        results: [],
        value: "",
        token: localStorage.getItem('token')
    }

    componentDidMount() {
        this.setState({
            token: localStorage.getItem('token')
        })
    }


    getSearchResultsHandler = (value) => {

        let data = $.ajax({
            url: "https://api.spotify.com/v1/search?query=" + value + "&offset=0&limit=10&type=track",
            type: "GET",
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + this.state.token);
            },
            success: data => {
                return data
            }
        })
        return data

    }

    onChangeHandler = (event) => {

        this.setState({
            isLoading: true
        })

        if (event.target.value !== "") {

            this.getSearchResultsHandler(event.target.value).then((data) => {

                let search_results = data.tracks.items
                let d = []
                search_results.map((item, index) => {
                    let result = {}
                    let artists = item.artists
                    // item.name // art.name

                    result.title = item.name
                    result.key = index
                    artists.map(art => (
                        result.description = art.name
                    ))
                    d.push(result)

                    return null
                })
                this.setState({
                    results: d
                })
            })

        }

        this.setState({
            isLoading: false,
            value: event.target.value
        })

    }


    render() {
        return (
            <Search
                loading={this.state.isLoading}
                onSearchChange={this.onChangeHandler}
                placeholder="Search for a Song"
                results={this.state.results}
            />
        );
    }

}