import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserModel} from '../../shared/user.model';
import {apiTypeEnum} from '../../shared/enum/api-type.enum';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {map, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

    constructor(private http: HttpClient,
                private storage: Storage, private router: Router) {
    }


    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }

    public get userIsAuthenticated() {
        return this.currentUserSubject.asObservable().pipe(map(user => {
            if (user) {
                return !!user.token;
            } else {
                return false;
            }
        }));
    }

    autoLogin() {
        return from(this.storage.get('currentUser')).pipe(tap((user: UserModel) => {
            this.currentUserSubject.next(user);
            // this.router.navigate(['/login']);
            console.log('Current User Data', user);
        }), map((user: UserModel) => {
            // If user exists, return true
            return !!user;
        }));
    }

    login(username: string, password: string) {
        const user = new UserModel(username, password);
        this.http.post(`${environment.config.apiUrl}${apiTypeEnum.LOGIN}`,
            {username: user.username, password: user.password}).pipe(map((userData: any) => {
            if (userData && userData.token) {
                user.token = userData.token;
                this.storage.set('currentUser', user).then(() => {
                    console.log('Store Current User', user);
                    this.currentUserSubject.next(user);
                });
            }
        })).subscribe(() => {
            console.log('Login');
            this.router.navigateByUrl('/tabs/fitness-overview');
        });
    }

    logout() {
        this.storage.set('currentUser', null).then(() => {
            this.currentUserSubject.next(null);
            console.log('Remove Current User');
            this.router.navigateByUrl('/login');
        });
    }
}
