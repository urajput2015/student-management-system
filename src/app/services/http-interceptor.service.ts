import { Injectable } from "@angular/core";
import { AuthService } from './auth.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class HttpInterceptorService implements HttpInterceptor
{
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        // We retrieve the token, if any
        const token = this.authService.getAuthToken;
        let newHeaders = req.headers;
        if (token) {
           // If we have a token, we append it to our new headers
           newHeaders = newHeaders.append('Authorization Bearer', token);
        }
        // Finally we have to clone our request with our new headers
        // This is required because HttpRequests are immutable
        const authReq = req.clone({headers: newHeaders});
        // Then we return an Observable that will run the request
        // or pass it to the next interceptor if any
        return next.handle(authReq);
     }
}