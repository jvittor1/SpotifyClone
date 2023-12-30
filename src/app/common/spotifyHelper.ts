import { IPlaylist } from "../interfaces/IPlaylist";
import { IUser } from "../interfaces/IUser";
import { IAlbum } from "../interfaces/IAlbum";
import { IArtist } from "../interfaces/IArtist";
import { ITrack } from "../interfaces/ITrack";
import { ICategory } from "../interfaces/ICategories";



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
        imgUrl: playlist.images.shift()?.url || ''
    }];
}


export function setNewReleases(album: SpotifyApi.AlbumObjectFull): IAlbum[] {
    return [{
        id: album.id,
        name: album.name,
        image: album.images.shift()?.url || '',
        artists: album.artists.map((artist : SpotifyApi.ArtistObjectSimplified) => ({
            id: artist.id,
            name: artist.name
        }))
    }];
}


export function setTracks(track: SpotifyApi.TrackObjectFull): ITrack[]{
    return [{
        id: track.id,
        name: track.name,
        album: {
            id: track.album.id,
            name: track.album.name,
            image: track.album.images.shift()?.url || '',
            artists: (track.album as SpotifyApi.AlbumObjectFull).artists.map((artist : SpotifyApi.ArtistObjectSimplified) => ({
                id: artist.id,
                name: artist.name
            }))
        },
        artists: track.artists.map((artist : SpotifyApi.ArtistObjectSimplified) => ({
            id: artist.id,
            name: artist.name
        }))
    }];
}


export function setArtist(artist: SpotifyApi.ArtistObjectFull) : IArtist[] {
    return [{
        id: artist.id,
        name: artist.name,
        imgUrl: artist.images.shift()?.url || ''
    }];
}


export function setCategories(category: SpotifyApi.CategoryObject): ICategory[] {
    return [{
        id: category.id,
        name: category.name,
        img: category.icons.shift()?.url || ''
    }]
}


export function setAlbum(album: SpotifyApi.SingleAlbumResponse): ITrack[] {
    return album.tracks.items.map((track : SpotifyApi.TrackObjectSimplified) => ({
            id: track.id,
            name: track.name,
            album: {
                id: album.id,
                name: album.name,
                image: album.images.shift()?.url || '',
                artists: album.artists.map((artist : SpotifyApi.ArtistObjectSimplified) => ({
                    id: artist.id,
                    name: artist.name
                }))
            },
            artists: track.artists.map((artist : SpotifyApi.ArtistObjectSimplified) => ({
                id: artist.id,
                name: artist.name
            }))
        }))
};
   
