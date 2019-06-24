import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { APP_SETTINGS } from "~/app/app-settings.config";
@Injectable({
        providedIn: 'root'
    }
)
export class UserService {

    public SessionToken: any;
    public LoggedIn: boolean;
    constructor(private http: HttpClient){}

    login(username: string, password : string){
        const body={
            'email': username,
            'contrasena': password
        };
        return this.http.post(APP_SETTINGS.API_ENDPOINT+'/login',body,APP_SETTINGS.OPTIONS);
    }
}
