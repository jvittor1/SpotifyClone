import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";

export function setUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
    return {
        id: user.id,
        name: user.display_name,
        imgUrl: user.images && user.images.length > 0 ? user.images.pop()?.url || '' : 'https://cdn-icons-png.flaticon.com/512/666/666201.png'
    }
}


export function setPlaylists(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist[] {
    return [{
        id: playlist.id,
        name: playlist.name,
        imgUrl: playlist.images.pop()?.url || ''
    }];
}