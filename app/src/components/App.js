import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sidebar from './sidebar/Sidebar'
import Nav from './nav/Nav'
import Explore from './content/Explore'
import Player from './player/Player'
import { loginUser } from '../actions/authActions'
import { fetchPlaylists } from '../actions/songsActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const hash = window.location.hash

    if (hash.includes('access_token')) {
      const token = hash.substring(14, hash.indexOf('&'))
      this.props.dispatch(loginUser(token))
      this.props.dispatch(fetchPlaylists(token))
    }
  }

  render() {
    return (
      <div id='app'>
        <div id='wrap'>
          <div id='wrap-inner'>
            <Sidebar />
            <Nav />
            <Explore />
            <Player />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)