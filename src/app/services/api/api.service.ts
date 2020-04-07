import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {apiTypeEnum} from '../../shared/enum/api-type.enum';
import {tap} from 'rxjs/operators';
import {SetModel} from '../../shared/set.model';
import {Subject} from 'rxjs';
import {LoadingService} from '../loading/loading.service';
import {LoadingMessageEnum} from '../../shared/enum/loading-message.enum';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    searchResult: Subject<object> = new Subject();

    constructor(private http: HttpClient, private loadingService: LoadingService) {
    }

    getTrainingTypes() {
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}${environment.config.format}`).pipe(tap(res => {
            console.log(res);
            this.loadingService.loadingDismiss().then();
        }));
    }

    getTrainingType(id: any) {
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}/${id}/${apiTypeEnum.TRAININGSET}${environment.config.format}`)
            .pipe(tap(res => {
                this.loadingService.loadingDismiss().then();
            }));
    }

    addTrainingType(typeName: string) {
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        return this.http.post(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}`, {
            name: typeName
        }).pipe(tap(res => {
            this.loadingService.loadingDismiss().then();
        }));
    }

    updateTrainingType(id: any, typeName: string) {
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        return this.http.put(`${environment.config.apiUrl}${apiTypeEnum.TRAININGTYPE}/${id}`, {
            name: typeName
        }).pipe(tap(res => {
            console.log(res);
            this.loadingService.loadingDismiss().then();
        }));
    }

    addTrainingSet(set: SetModel) {
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        const updateSet = set;
        updateSet.type = environment.config.trainingTypePrefix + set.type;
        console.log(updateSet);
        return this.http.post(`${environment.config.apiUrl}${apiTypeEnum.TRAININGSET}`, updateSet).pipe(tap(res => {
            console.log(res);
            this.loadingService.loadingDismiss().then();
        }));
    }

    updateTrainingSet(set: SetModel, id: number) {
        const updateSet = set;
        updateSet.type = environment.config.trainingTypePrefix + set.type;
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        return this.http.put(`${environment.config.apiUrl}${apiTypeEnum.TRAININGSET}/${id}`, updateSet).pipe(tap(res => {
            console.log(res);
            this.loadingService.loadingDismiss().then();
        }));
    }

    deleteTrainingSet(id: number) {
        this.loadingService.loadingPresent(LoadingMessageEnum.general).then();
        return this.http.delete(`${environment.config.apiUrl}${apiTypeEnum.TRAININGSET}/${id}`).pipe(tap(res => {
            console.log(res);
            this.loadingService.loadingDismiss().then();
        }));
    }

    getTrainingByDay(startDate: any, endDate: any, type: any) {
        this.loadingService.loadingPresent(LoadingMessageEnum.analytic).then();
        const params = new HttpParams().set('startDate', startDate).set('endDate', endDate).set('type', type);
        return this.http.get(`${environment.config.apiUrl}${apiTypeEnum.TRAININGBYDAY}`, {params}).pipe(tap(() => {
            this.loadingService.loadingDismiss().then();
        }));
    }
}
