import { IArtist } from "./IArtist";
import { ITrack } from "./ITrack";

export interface IAlbum {
    id: string;
    name: string;
    image: string;
    artists: IArtist[];
    tracks?: ITrack[];
}