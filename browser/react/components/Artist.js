import React, { Component } from 'react';
import axios from 'axios';
import Albums from '../components/Albums'
import Songs from '../components/Songs';

export default class Artist extends Component {
    constructor(props) {
        super(props);
        // this.state = {}
    }

    componentDidMount() {
        const artistId = this.props.routeParams.artistId;
        // this.state.artist = this.props.artist;
        this.props.selectArtist(artistId);
    }

    render() {
        console.log(this.props.artist);
        return (
            <div>
                <h3>{this.props.artist.name}</h3>
                <h4>ALBUMS</h4>
                <Albums Album={this.props.selectAlbum} albums={this.props.artist.albums} />
                <h4>SONGS</h4>
                <Songs
                    songs={this.props.artist.songs}
                    currentSong={this.props.currentSong}
                    isPlaying={this.props.isPlaying}
                    toggleOne={this.props.toggleOne}
                />
            </div>
        );
    }
}
