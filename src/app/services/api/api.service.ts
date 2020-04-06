import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {apiTypeEnum} from '../../shared/enum/api-type.enum';
import {tap} from 'rxjs/operators';
import {SetModel} from '../../shared/set.model';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    searchResult: Subject<object> = new Subject();
    constructor(private http: HttpClient) {
    }

    getTrainingTypes() {
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}${environment.config.format}`).pipe(tap(res => {
            console.log(res);
        }));
    }

    getTrainingType(id: any) {
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}/${id}/${apiTypeEnum.TRAININGSET}${environment.config.format}`)
            .pipe(tap(res => {
                console.log(res);
            }));
    }

    addTrainingType(typeName: string) {
        return this.http.post(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}`, {
            name: typeName
        }).pipe(tap(res => {
            console.log(res);
        }));
    }

    updateTrainingType(id: any, typeName: string) {
        return this.http.put(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}/${id}`, {
            name: typeName
        }).pipe(tap(res => {
            console.log(res);
        }));
    }

    addTrainingSet(set: SetModel) {
        const updateSet = set;
        updateSet.type = environment.config.trainingTypePrefix + set.type;
        console.log(updateSet);
        return this.http.post(`${environment.config.apiUrl}${apiTypeEnum.TRAININGSET}`, updateSet).pipe(tap(res => {
            console.log(res);
        }));
    }

    updateTrainingSet(set: SetModel, id: number) {
        const updateSet = set;
        updateSet.type = environment.config.trainingTypePrefix + set.type;
        return this.http.put(`${environment.config.apiUrl}${apiTypeEnum.TRAININGSET}/${id}`, updateSet).pipe(tap(res => {
            console.log(res);
        }));
    }

    deleteTrainingSet(id: number) {
        return this.http.delete(`${environment.config.apiUrl}${apiTypeEnum.TRAININGSET}/${id}`).pipe(tap(res => {
            console.log(res);
        }));
    }

    getTrainingByDay(startDate: any, endDate: any, type: any) {
        const params = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('type', type);
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGBYDAY}`, {params});
    }
}
