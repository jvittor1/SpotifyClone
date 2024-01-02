import { IAlbum } from "./IAlbum";
import { IArtist } from "./IArtist";
import { IPlaylist } from "./IPlaylist";
import { ITrack } from "./ITrack";

export interface ISearchResults {
    artists: IArtist[];
    albums: IAlbum[];
    tracks: ITrack[];
    playlists: IPlaylist[];
}