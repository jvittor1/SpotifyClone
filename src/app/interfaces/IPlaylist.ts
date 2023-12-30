import { ITrack } from "./ITrack";

export interface IPlaylist {

    id: string;
    name: string;
    imgUrl: string;
    tracks?: ITrack[];


}