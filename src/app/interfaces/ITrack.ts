import { IAlbum } from "./IAlbum";
import { IArtist } from "./IArtist";

export interface ITrack {
    id: string;
    name: string;  
    album: IAlbum;
    artists: IArtist[];
    time?: string;
}