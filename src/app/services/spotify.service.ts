import { Injectable, inject} from "@angular/core";
import { spotifyConfig } from "src/enviroments/enviroment.prod";
import Spotify  from 'spotify-web-api-js'
import { IUser } from "../interfaces/IUser";
import { setAlbum, setArtist, setCategories, setNewReleases, setPlaylists, setTracks, setUser } from "../common/spotifyHelper";
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


    async getNewReleases() {
        const newReleases = await this.spotifyApi?.getNewReleases();     
        return newReleases?.albums?.items.flatMap((item) => setNewReleases(item as SpotifyApi.AlbumObjectFull)) || [];
        
    }
    

    // async getRecommendations() {
    //     const top5Artists = await this.spotifyApi?.getMyTopArtists({ limit: 5 });
    
    //     const recommendations = await this.spotifyApi?.getRecommendations({ seed_artists: top5Artists?.items?.map(item => item.id) });

    //     const tracks = recommendations?.tracks
    //     return tracks?.flatMap(track => setTracks(track as SpotifyApi.TrackObjectFull))
        
    // }



    async getRecentlyPlayed() {
        const recentlyPlayed = await this.spotifyApi?.getMyRecentlyPlayedTracks({limit: 4});
        return recentlyPlayed?.items?.flatMap(track => setTracks(track.track as SpotifyApi.TrackObjectFull)) || [];
    }

    async getTopTracks() {
        const topTracks = await this.spotifyApi?.getMyTopTracks({limit: 4});
        return topTracks?.items?.flatMap(track => setTracks(track as SpotifyApi.TrackObjectFull)) || [];
    }


    async getCategories() {
        const categories = await this.spotifyApi?.getCategories();        
        return categories?.categories?.items?.flatMap(category => setCategories(category as SpotifyApi.CategoryObject)) || [];
    }

    async getTopArtists() {
        const topArtists = await this.spotifyApi?.getMyTopArtists({limit: 5});
        return topArtists?.items?.flatMap(artist => setArtist(artist as SpotifyApi.ArtistObjectFull)) || [];
    }


    
    async getRelatedArtists(){
        const topArtists = await this.spotifyApi?.getMyTopArtists({limit: 10});
        
        if (topArtists && topArtists.items && topArtists.items.length > 0) {
            const randomIndex = Math.floor(Math.random() * topArtists.items.length);
            const randomArtist = topArtists.items[randomIndex];

            const relatedArtists = await this.spotifyApi?.getArtistRelatedArtists(randomArtist.id);


            const limitedRelatedArtists = relatedArtists?.artists?.slice(0, 10) || [];

            return limitedRelatedArtists.flatMap(artist => setArtist(artist as SpotifyApi.ArtistObjectFull)) || [];
        }

        return [];

    }


    async getTracksByPlaylistId(id: string) {
        const tracks = await this.spotifyApi?.getPlaylistTracks(id);
        return tracks?.items?.flatMap(track => setTracks(track.track as SpotifyApi.TrackObjectFull)) || [];
    }

    async getTracksByArtistId(id: string) {
        const tracks = await this.spotifyApi?.getArtistTopTracks(id, 'BR');
        return tracks?.tracks?.flatMap(track => setTracks(track as SpotifyApi.TrackObjectFull)) || [];
    }


    async getTrackByAlbumId(id: string) {
        console.log(id);
        
        const album = await this.spotifyApi?.getAlbum(id)
        return setAlbum(album as SpotifyApi.SingleAlbumResponse);
        
    
    }

    async getArtistById(id: string) {
        const artist = await this.spotifyApi?.getArtist(id);
        console.log(artist);
        
        return artist;
    }


    async getPlaylistById(id: string) {
        const playlist = await this.spotifyApi?.getPlaylist(id);
        console.log(playlist);
        
        return playlist;
    }


    async getAlbumById(id: string) {
        const album = await this.spotifyApi?.getAlbum(id);
        console.log(album);
        
        return album;
    }
}