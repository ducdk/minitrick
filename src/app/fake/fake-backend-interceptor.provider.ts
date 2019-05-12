import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { BLOGS } from './fake-data';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        let blogs = BLOGS;

        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // get users
            if (request.url.endsWith('/blogs') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                // if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: {data: blogs} }));
                // } else {
                    // return 401 not authorised if token is null or invalid
                    // return throwError({ error: { message: 'Unauthorised' } });
                // }
            }

            // get blog by id
            if (request.url.match(/\/blogs\/[a-z0-9-]+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    // find user by id in users array
                let urlParts = request.url.split('/');
                let slug = urlParts[urlParts.length - 1];
                let matchedBlogs = blogs.filter(blog => { return blog.slug === slug; });
                let blog = matchedBlogs.length ? matchedBlogs[0] : null;

                if (blog) {
                    return of(new HttpResponse({ status: 200, body: blog }));
                }
                // return 401 not authorised if token is null or invalid
                return throwError({ error: { message: 'No data' } });
            }

            // pass through any requests not handled above
            return next.handle(request);
            
        }))

        // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};