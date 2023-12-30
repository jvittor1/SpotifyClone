import { ITrack } from "./ITrack";

export interface IArtist {
    id: string;
    name: string;
    imgUrl?: string;
    tracks?: ITrack[];
}