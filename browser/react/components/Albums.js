import React from 'react';
import { Link } from 'react-router';

const Albums = (props) => {
  console.log(props);
  // console.log(props ?
  //   `Albums() ran and has a props album id of  ${props}` :
  //   `Albums() ran and has ${Object.keys(props)}`
  // );

  const albums = props.albums;
  const selectAlbum = props.selectAlbum;

  // console.log("albums is " + albums[0].imageUrl);
  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
        {
          albums && albums.map(album => (
            <div className="col-xs-4" key={album.id}>
              <Link className="thumbnail" to={`/albums/${album.id}`}  >
                <img src={album.imageUrl} />
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small>{album.songs.length}songs</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Albums;
