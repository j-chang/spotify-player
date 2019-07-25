import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id='player' className='Player'>
        <div className='Player-album' style={{background: `url(./assets/dusk.png) no-repeat center bottom`, backgroundSize: 'auto 100%'}}></div>
        <div className='Player-info'>
          <div className='Player-artist'>SG Lewis</div>
          <div className='Player-song'>Sunsets</div>
        </div>

        <div className='Player-controls'>
          <div className='Player-playback'>
            <div className='Player-playback-button'><i className='fas fa-random'/></div>
            <div className='Player-playback-button'><i className='fas fa-backward'/></div>
            <div className='Player-playback-button PlayButton'><i className='fas fa-pause'/></div>
            <div className='Player-playback-button'><i className='fas fa-forward'/></div>
            <div className='Player-playback-button'><i className='fas fa-random'/></div>
          </div>

          <div className='Player-time'>
            <div className='Player-time-start'>0:45</div>
            <input className='Player-time-track' type='range'/>
            <div className='Player-time-end'>3:26</div>
          </div>
        </div>

        <div className='Player-volume'>
          <i className='fas fa-volume-down'/>
          <input className='Player-volume-slider' type='range' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(Player)