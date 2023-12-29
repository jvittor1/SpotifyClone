import { IArtist } from "./IArtist";

export interface IAlbum {
    id: string;
    name: string;
    image: string;
    artists: IArtist[];
}