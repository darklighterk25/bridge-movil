import { Injectable } from "@angular/core";
import { Auto } from "./auto";
import { AUTOS } from "./mock-autos";

@Injectable()
export class AutosService {
    private _selectedId = -1;

    getAutos(): Auto[] {
        return AUTOS;
    }

    getAuto(id: number): Auto {
        return AUTOS.filter(auto => auto.id === id)[0];
    }

    setSelectedId(id: number) {
        this._selectedId=-1;
        if (id < AUTOS.length) {
            this._selectedId = id;
        }
    }

    getSelected(): Auto {
        return this._selectedId < 0 ? null : this.getAuto(this._selectedId);
    }

    searchAutos(searchString: string): Auto[]{
        return AUTOS.filter( auto => auto.marca.toLowerCase().includes(searchString));
    }
}
