export const authEndpoint = "https://accounts.spotify.com/authorize/";
const redirectUri = "http://jpsspotify.netlify.app/";
const clientID = "560f6a3b09fd4da5bc4ae1e26d657f7f";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-library-modify",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;