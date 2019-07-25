import { UPDATE_PLAYLISTS } from '../actions/songsActions'

const initialState = {
  latestReleases: [
    {album: 'free_spirit.png', artist: 'Khalid', song: 'Talk'},
    {album: '7rings.png', artist: 'Ariana Grande', song: '7 rings'},
    {album: 'happier.png', artist: 'Marshmello', song: 'Happier'},
    {album: 'kill_this_love.png', artist: 'Blackpink', song: 'Kill this love'},
    {album: 'mine.png', artist: 'Bazzi', song: 'Mine'},
    {album: 'death_race_for_love.png', artist: 'Juice WRLD', song: 'Robbery'},
    {album: 'skin.png', artist: 'Flume', song: 'Say it'},
    {album: 'wow.png', artist: 'Post Malone', song: 'Wow.'},
    {album: 'lalaland.png', artist: 'Bryce Vine', song: 'La La Land'},
    {album: 'joytime.png', artist: 'Marshmello', song: 'Tell Me'},
    {album: 'death_race_for_love.png', artist: 'Juice WRLD', song: 'Fast'},
    {album: 'dusk.png', artist: 'SG Lewis', song: 'Sunsets'}
  ],
  playlists: ['Friday mood', 'Work hard', 'chill']
}

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state
  }
}

export default songsReducer