
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../general/common.service';
import { ResponseService } from '../../general/response.service';
import { HttpProvider } from './http-provider';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient, private _serviceCommon: CommonService,
    private _serviceResponse: ResponseService) { }
  private baseUrl: string = environment.urlEnvironment.apiBaseUrl;
  private httpProvider = new HttpProvider(this.http);

  get(url: string, messageSuccessful: boolean = false, httpOption: any = this.httpOption): Observable<any> {
    this._serviceCommon.showProgressBar();
    return this.httpProvider.get(`${this.baseUrl}${url}`, httpOption).pipe(
      map((data: any) => {
        if (data?.type == undefined) {
          return this._serviceResponse.mapValidResponse(data, messageSuccessful);
        }
      }),
    );
  }
  post(url: string, body: any, messageSuccessful: boolean = false, httpOption: any = this.httpOption): Observable<any> {
    this._serviceCommon.showProgressBar();
    return this.httpProvider.post(`${this.baseUrl}${url}`, body, httpOption)
      .pipe(
        map((data: any) => {
          if (data?.type == undefined) {
            return this._serviceResponse.mapValidResponse(data, messageSuccessful);
          }
        }),
      );
  }
  put(url: string, body: any, messageSuccessful: boolean = false, httpOption: any = this.httpOption): Observable<any> {
    this._serviceCommon.showProgressBar();
    return this.httpProvider.put(`${this.baseUrl}${url}`, body, httpOption)
      .pipe(
        map((data: any) => {
          if (data?.type == undefined) {
            return this._serviceResponse.mapValidResponse(data, messageSuccessful);
          }
        }),
      );
  }
  delete(url: string, messageSuccessful: boolean = false, httpOption: any = this.httpOption): Observable<any> {
    this._serviceCommon.showProgressBar();
    return this.httpProvider.delete(`${this.baseUrl}${url}`, httpOption).pipe(
      map((data: any) => {
        if (data?.type == undefined) {
          return this._serviceResponse.mapValidResponse(data, messageSuccessful);
        }
      }),
    );
  }
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
}
