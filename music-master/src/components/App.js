import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const SPOTIFY_API = 'https://spotify-api-wrapper.appspot.com'
class App extends Component {
    //define a state variable named artistQuery
    state = { 
            artist: null, 
            tracks: []
        }

    
    //giving a value as input, and then when we call the method
    //we provide an input.
    searchArtist = artistQuery => {
        fetch(`${SPOTIFY_API}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            this.setState({artist});

            fetch(`${SPOTIFY_API}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({tracks: json.tracks}))
            .catch(error => alert(error.message))
        })
        .catch(error => console.log(error.message))
    }

    //Here, value for searchArtist is passed down as a method named searchArtist
    render()
    {
        return (
            <div>
                <h2>MusixMatch</h2><br/>
            <Search searchArtist = {this.searchArtist}/>
            <Artist artist = {this.state.artist}/>
            <Tracks tracks = {this.state.tracks}/>
            </div>
        )
    }
}

export default App;
