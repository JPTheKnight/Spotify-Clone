export const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    recom_playlists: [],
    cur_playlist_selected: 0,
    cur_song_selected_lyrics: ''
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type)
    {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state, 
                playlists: action.playlists
            }
        case 'SET_RECOM_PLAYLISTS':
            return {
                ...state, 
                recom_playlists: [...state.recom_playlists, action.recom_playlists],
            }
        case 'SET_CUR_PS_SELECTED':
            return {
                ...state, 
                cur_playlist_selected: action.cur_playlist_selected
            }
        case 'SET_CUR_SONG_SELECTED':
            return {
                ...state, 
                cur_song_selected_lyrics: action.cur_song_selected_lyrics
            }
        default:
            return state;
    }
}

export default reducer;