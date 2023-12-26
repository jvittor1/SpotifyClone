import { Injectable, inject} from "@angular/core";
import { spotifyConfig } from "src/enviroments/enviroment.prod";
import Spotify  from 'spotify-web-api-js'
import { IUser } from "../interfaces/IUser";
import { setPlaylists, setUser } from "../common/spotifyHelper";
import { userInitialize } from "../common/userInitialize";
import { IPlaylist } from "../interfaces/IPlaylist";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class SpotifyService {

    spotifyApi ?: Spotify.SpotifyWebApiJs;
    user: IUser = userInitialize();

    constructor(private route: Router) {
        this.spotifyApi = new Spotify();

    }

    async getUser() {
        const token = localStorage.getItem('token');


        if(!!this.user){
            this.defineAccessToken(token as string);
            await this.getUserData();
            return true;
        }

        
        

        if(!token){
            return false;
        }

        try {
            this.defineAccessToken(token);
            await this.getUserData();
            return !!this.user;
        }
        catch (e) {
            return false;
        }
    }

    async getUserData() {
        const newUser = await this.spotifyApi?.getMe();
        this.user = setUser(newUser as SpotifyApi.CurrentUsersProfileResponse);
        
    }

    getUrlLogin() {
        const authEndpoint = `${spotifyConfig.authEndpoint}?`;
        const clientId = `client_id=${spotifyConfig.clientId}&`;
        const redirectUri = `redirect_uri=${spotifyConfig.redirectUri}&`;
        const scopes = `scope=${spotifyConfig.scopes.join('%20')}&`;
        const responseType = `response_type=token&show_dialog=true`;
        return `${authEndpoint}${clientId}${redirectUri}${scopes}${responseType}`;
    }


    getTokenCallback() {
        if (window.location.hash) {
            const hash = window.location.hash.substring(1).split('&');
            return hash[0].split('=')[1]; 
        }
        return '';
    }


    defineAccessToken(token: string) {
        this.spotifyApi?.setAccessToken(token);
        localStorage.setItem('token', token);
        
    }


    async getPlaylists(offset = 0, limit = 50): Promise<IPlaylist[]> {
        const playlists = await this.spotifyApi?.getUserPlaylists(this.user.id, { offset, limit });
        return playlists?.items ? playlists.items.flatMap(setPlaylists) : [];
    }


    logout() {
        localStorage.removeItem('token');
        this.route.navigate(['/login']);
        this.user = userInitialize();
    }


    
}