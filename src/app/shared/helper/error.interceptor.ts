import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {errorEum, errorMessage} from '../enum/error.eum';
import {AuthService} from '../../services/auth/auth.service';
import {AlertService} from '../../services/alert/alert.service';
import {LoadingService} from '../../services/loading/loading.service';
import {LoadingMessageEnum} from '../enum/loading-message.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService,
                public alertService: AlertService,
                public loadingService: LoadingService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === errorEum.LOGINFAILED) {
                // auto logout if 401 response returned from api
                this.authService.logout();
                this.alertService.presentAlert(errorMessage(errorEum.LOGINFAILED)).then(() => {
                });
            } else {
                this.alertService.presentAlert(errorMessage(errorEum.GENERAL)).then(() => {
                });
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }), tap(() => {
        }));
    }

}
