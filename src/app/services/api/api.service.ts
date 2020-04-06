import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {apiTypeEnum} from '../../shared/enum/api-type.enum';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    getTrainingType() {
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}${environment.config.format}`).pipe(tap(res => {
            console.log(res );
        }));
    }
}
