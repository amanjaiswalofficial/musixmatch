import React, { Component } from 'react';

class Search extends Component{

    state = { artistQuery: ''}

    updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value,})
    }

    handleKeyPress = event => {
        if (event.key == 'Enter'){
            this.searchArtist();
        }
    }

    //makes call to a props method searchArtist with value of artistQuery
    searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery)
    }

    //on button click, searchArtist is called
    render()
    { return (
        <div>
            <input 
            onChange = {this.updateArtistQuery} 
            onKeyPress = {this.handleKeyPress} 
            placeholder = "Artist's name here"/>
            <button onClick = {this.searchArtist}>Search</button>
        </div>
    )
    }
}

export default Search