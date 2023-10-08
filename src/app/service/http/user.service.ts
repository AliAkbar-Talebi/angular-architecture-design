import { Injectable } from '@angular/core';
import { UserRepository } from '../repository/user.repository';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './base/shared.service';
import { CommonService } from '../general/common.service';
import { ResponseService } from '../general/response.service';

@Injectable()
export class UserService implements UserRepository {
  baseUrl = environment.urlEnvironment.apiBaseUrl;
  private httpShared = new SharedService(this.http, this.commonService, this.responseService);
  constructor(private http: HttpClient, private commonService: CommonService, private responseService: ResponseService) { }
  getUserInfo(): Observable<any> {
    return this.httpShared.get(`${this.baseUrl}get-test`)
  }
}
