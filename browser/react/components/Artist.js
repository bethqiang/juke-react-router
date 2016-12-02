import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import Albums from '../components/Albums'
import Songs from '../components/Songs';

export default class Artist extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log(this.props)
    }

    componentDidMount() {
        console.log("component")
        const artistId = this.props.routeParams.artistId;
        // this.state.artist = this.props.artist;
        this.props.selectArtist(artistId);
    }

    render() {

        console.log("this.props", this.props);
        // albums: {} // undefined

        const selectedArtist = this.props.artist;
        const children = this.props.children;
        const propsToPassToChildren = {
        /**todo: albums, songs **/
            album: this.props.selectAlbum,
            albums: this.props.artist.albums,
            songs: this.props.artist.songs,
            currentSong: this.props.currentSong,
            isPlaying: this.props.isPlaying,
            toggleOne: this.props.toggleOne
        }

        return (
            <div>
                <h3>{ selectedArtist.name }</h3>
                <ul className="nav nav-tabs">
                    <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
                    <li><Link to={'#'}>SONGS</Link></li>
                </ul>
                { children && React.cloneElement(children, propsToPassToChildren) }
            </div>
        );

    }



    // render() {
    //     console.log(this.props.artist);
    //     return (
    //         <div>
    //             <h3>{this.props.artist.name}</h3>
    //             <h4>ALBUMS</h4>
    //             <Albums album={this.props.selectAlbum} albums={this.props.artist.albums} />
    //             <h4>SONGS</h4>
    //             <Songs
    //                 songs={this.props.artist.songs}
    //                 currentSong={this.props.currentSong}
    //                 isPlaying={this.props.isPlaying}
    //                 toggleOne={this.props.toggleOne}
    //             />
    //         </div>
    //     );
    // }
}
