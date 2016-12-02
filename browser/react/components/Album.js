import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';

  // const album = props.album;
  // const currentSong = props.currentSong;
  // const isPlaying = props.isPlaying;
  // const toggleOne = props.toggleOne;

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAlbum: {
        name: '',
        imageUrl: '',
        songs: [],
      },
    };
  }

  componentDidMount() {
    axios.get(`/api/albums/${this.props.params.albumId}`)
    .then(res => res.data)
    .then(album => this.setState({
      selectedAlbum: album,
    }));
  }


  render() {
    return (
      <div className="album">
        <div>
          <h3>{ this.state.selectedAlbum.name }</h3>
          <img src={this.state.selectedAlbum.imageUrl} className="img-thumbnail" />
        </div>
        <Songs
          songs={this.state.selectedAlbum.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}
