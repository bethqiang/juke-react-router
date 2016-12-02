import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';

  // const album = state.selectedAlbum;
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;

export default class Album extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(albumId);
  }


  render() {
    return (
      <div className="album">
        <div>
          <h3>{ this.props.album.name }</h3>
          <img src={this.props.album.imageUrl} className="img-thumbnail" />
        </div>
        <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}
