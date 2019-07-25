import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.spotifyLogin = this.spotifyLogin.bind(this)
  }

  componentDidMount() {
  }

  spotifyLogin() {
    const config = {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    }

    const url = 'https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=d4877564b1b2499a960a7c8629dcbab5' +
      '&scope=user-read-private,playlist-read-private,playlist-read-collaborative' +
      '&redirect_uri=http://localhost:8081/callback'

    fetch(url, config)
      .then(response => response.headers.get('X-Final-Url'))
      .then(url => window.location.href = url)
      .catch(error => this.setState({ error: 'There was an error. Contact support for assistance' }))
  }

  render() {
    return (
      <div id='nav' className='Nav'>
        <div className='Nav-search'>
          <i className='fas fa-search'/>
          <input
            className='Nav-search-input'
            type='text'
            placeholder='Search songs, artists, etc..'
          />
        </div>

        <div className='Nav-user'>
          <div className='Nav-user-avatar' onClick={this.spotifyLogin}>
            <img src='./assets/avatar.png'/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Nav)