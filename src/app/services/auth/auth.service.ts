import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {UserModel} from '../../shared/user.model';
import {apiTypeEnum} from '../../shared/enum/api-type.enum';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        const user = new UserModel(username, password);
        return this.http.post(`${environment.config.apiUrl}${apiTypeEnum.LOGIN}`, {username : user.username, password: user.password});
    }
}
