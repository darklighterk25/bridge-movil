import { Injectable } from "@angular/core";
import { Auto } from "./auto";
import { AUTOS } from "./mock-autos";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { APP_SETTINGS } from "~/app/app-settings.config";

@Injectable({
        providedIn: 'root'
}
)
export class AutosService {
    private _selectedId = -1;
    private _selectedId2: number;
    public id: string
    public autos: any;

    constructor(private http: HttpClient){
    }

    getAutos(): Auto[] {
        return AUTOS;
    }
    getAutos2(): Observable<any>{
        return this.http.get(APP_SETTINGS.API_ENDPOINT+'/autos')
    }

    getAuto(id: number): Auto {
        return AUTOS.filter(auto => auto.id === id)[0];
    }
    getAuto2(id: number): any{
       return this.autos[id];
    }
    getAutoDetails(id: number){
        return AUTOS.filter(auto => auto.id === id)[0];
    }

    getAutoDetails2(id: string){
        return this.http.get(APP_SETTINGS.API_ENDPOINT+'/auto/'+id);
    }

    setSelectedId(id: number) {
        this._selectedId=-1;
        if (id < AUTOS.length) {
            this._selectedId = id;
        }
    }

    setSelectedId2(id: number){
        this._selectedId2= id;
    }
    setId(id: string){
       this.id=id;
    }
    getSelected(): Auto {
        return this._selectedId < 0 ? null : this.getAuto(this._selectedId);
    }
    getSelected2(): any{
        return this.getAuto2(this._selectedId2);
    }

    searchAutos(searchString: string): Auto[]{
        return AUTOS.filter( auto => auto.marca.toLowerCase().includes(searchString));
    }
}
