import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserModel} from '../../shared/user.model';
import {apiTypeEnum} from '../../shared/enum/api-type.enum';
import {BehaviorSubject, Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {map} from 'rxjs/operators';
import {Platform} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;

    constructor(private http: HttpClient,
                private storage: Storage,
                private platform: Platform) {
        this.platform.ready().then(() => {
            this.getCurrentUser();
        });
    }

    getCurrentUser() {
        this.storage.get('currentUser').then((user) => {
            this.currentUserSubject = new BehaviorSubject<UserModel>(user);
            this.currentUser = this.currentUserSubject.asObservable();
            console.log('Current User Data', user);
        });
    }

    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        const user = new UserModel(username, password);
        this.http.post(`${environment.config.apiUrl}${apiTypeEnum.LOGIN}`,
            {username: user.username, password: user.password}).pipe(map((userData: any) => {
            if (userData && userData.token) {
                user.token = userData.token;
                this.storage.set('currentUser', user).then(() => {
                    console.log('Store Current User', user);
                });
            }
        })).subscribe(() => {
            console.log('Login');
        });
    }

    logout() {
        this.storage.set('currentUser', null).then(() => {
            console.log('Remove Current User');
        });
    }
}
