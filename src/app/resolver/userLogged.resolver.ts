import { inject } from "@angular/core";
import { SpotifyService } from "../services/spotify.service";
import { Router } from "@angular/router";

export const userLoggedResolver = () => new Promise(async (res, rej) =>{
    
    
    const spotifyService = inject(SpotifyService);
    const route = inject(Router);
    
    const token = localStorage.getItem('token');
    
    const noAuthentication = () =>{
        localStorage.clear();
        route.navigate(['login']);
        rej('User not logged')
        return false;
    }


    if(!token){
        return noAuthentication();
    }


    const user = await spotifyService.getUser();
    
    if(user){
        res(true)
    }
    
    else{   
        rej(noAuthentication())
    }
    return false;
})

