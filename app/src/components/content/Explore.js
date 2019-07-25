import React, { Component } from 'react'
import { connect } from 'react-redux'

class Explore extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.renderMockedData = this.renderMockedData.bind(this)
    this.renderSong = this.renderSong.bind(this)
  }

  componentDidMount() {
  }

  renderMockedData() {
    const { latestReleases } = this.props.songs

    return (
      <div className='LatestReleases-songs'>
        <div className='LatestReleases-songs-container'>
          {latestReleases.slice(0,3).map(this.renderSong)}
        </div>
        <div className='LatestReleases-songs-container'>
          {latestReleases.slice(3,6).map(this.renderSong)}
        </div>
        <div className='LatestReleases-songs-container'>
          {latestReleases.slice(6,9).map(this.renderSong)}
        </div>
        <div className='LatestReleases-songs-container'>
          {latestReleases.slice(9,12).map(this.renderSong)}
        </div>
      </div>
    )
  }

  renderSong(song) {
    return(
      <div className='LatestReleases-song'>
        <div className='LatestReleases-song-play'><i className='fas fa-play'/></div>
        <div className='LatestReleases-song-album'><img src={`./assets/${song.album}`}/></div>
        <div className='LatestReleases-song-info'>
          <div className='LatestReleases-song-artist'>{song.artist}</div>
          <div className='LatestReleases-song-name'>{song.song}</div>
        </div>

        <div className='LatestReleases-song-time'>3:24</div>
        <div className='LatestReleases-song-like'><i className='far fa-heart'/></div>
      </div>
    )
  }

  render() {
    return (
      <div id='explore' className='Explore'>
        <div className='Explore-main' style={{background: 'linear-gradient(217deg, rgba(169,229,247,.8), rgba(38,230,189,.8) 70.71%), url(./assets/ariana.png) no-repeat center bottom', backgroundSize: 'auto 100%'}}>
          <div className='Explore-main-content'>
            <h1 className='Explore-main-header'>The hottest hits of the week</h1>
            <div className='Explore-main-buttons'>
              <div className='Explore-main-buttons-play'>Play now</div>
              <div className='Explore-main-buttons-like'><i className='fas fa-heart'/></div>
            </div>
          </div>
        </div>

        <div className='LatestReleases'>
          <div className='LatestReleases-header'>
            <div className='LatestReleases-header-label'>Latest releases</div>
            <div className='LatestReleases-header-view'>View all</div>
          </div>

          {this.renderMockedData()}
        </div>

        <div className='RecommendedAlbums'>
          <div className='RecommendedAlbums-header'>
            <div className='RecommendedAlbums-header-label'>Recommended albums</div>
            <div className='RecommendedAlbums-header-view'>View all</div>
          </div>
          <div className='RecommendedAlbums-albums'>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/joytime.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/free_spirit.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/skin.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/mine.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/kill_this_love.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/dusk.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/death_race_for_love.png'/></div>
            <div className='RecommendedAlbums-albums-album'><img src='./assets/lalaland.png'/></div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Explore)