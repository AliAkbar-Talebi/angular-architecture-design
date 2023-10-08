import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class HttpProvider {
    constructor(private http: HttpClient) {

    }
    get(url: string, httpOption: any): Observable<any> {
        return this.http.get(url, httpOption)
    }
    post(url: string, body: any, httpOption: any): Observable<any> {
        return this.http.post(url, body, httpOption);
    }
    put(url: string, body: any, httpOption: any): Observable<any> {
        return this.http.put(url, body, httpOption);
    }
    delete(url: string, httpOption: any): Observable<any> {
        return this.http.delete(url, httpOption);
    }

    test(url: string, httpOption: any): Observable<any> {
        return this.http.get(url, httpOption);
    }
}