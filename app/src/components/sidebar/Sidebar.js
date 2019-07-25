import React, { Component } from 'react'
import { connect } from 'react-redux'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  renderPlaylist(playlist) {
    return (
      <li className='SidebarLink'><a href='#'>{playlist}</a></li>
    )
  }

  render() {
    const { playlists } = this.props.songs

    return (
      <ul id='sidebar' className='Sidebar'>
        <div className='LogoContainer'>
          <img id='logo' src='./assets/sp.svg' alt='spotify-ui'/>
        </div>

        <div className='Sidebar-section-header'>Browse Music</div>
        <li className='SidebarLink is-active'><a href='#'>Explore</a></li>
        <li className='SidebarLink'><a href='#'>Radio</a></li>

        <div className='Sidebar-section-header'>Library</div>
        <li className='SidebarLink'><a href='#'>Recently played</a></li>
        <li className='SidebarLink'><a href='#'>Favorites</a></li>
        <li className='SidebarLink'><a href='#'>Artists</a></li>
        <li className='SidebarLink'><a href='#'>Songs</a></li>

        <div className='Sidebar-section-header'>Playlists</div>
        {playlists.map(playlist => <li className='SidebarLink' key={playlist}><a href='#'>{playlist}</a></li>)}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Sidebar)