import {HttpHeaders} from '@angular/common/http';

const headers = new HttpHeaders({'Content-Type': 'application/json'});
headers.append('Accept', 'application/json;q=0.9,*/*;q=0.8');

export const APP_SETTINGS = {
    API_ENDPOINT: 'https://bridge-back-end.herokuapp.com',
    OPTIONS: {
        headers: headers
    }
};
