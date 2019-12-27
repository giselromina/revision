import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private snackBar: MatSnackBar

    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap(evt => {
            console.log("Everything is fine");
        }, (err: any) => {

            if (err instanceof HttpErrorResponse) {
                this.snackBar.open("Hubo un error procesando su solicitud", null, { duration: 1500 });

                // if (err.status == 401) {
                //     //Unauthorized
                //     //this._toastrManager.errorToastr(err.message, "Unauthorized");
                //     localStorage.removeItem('auth_token');
                //     this._router.navigate(['/login'])
                // }
                // if (err.status == 500) {
                //     debugger
                //     this._toastrManager.errorToastr(err.error.message, 'Error');
                // }
                // if (err.status == 403) {
                //     this._toastrManager.errorToastr(err.error.message, 'Error');
                // }

                // //Status code 436 son las excepciones custom ejemplo UserNotFoundException
                // if (err.status == 436) {
                //     this._toastrManager.errorToastr(err.error.message, 'Error');
                // }

                console.log(err);
            }
        }));
    }
}