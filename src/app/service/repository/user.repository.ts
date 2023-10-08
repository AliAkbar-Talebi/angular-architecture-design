import { Observable } from "rxjs";

export abstract class UserRepository {
    public abstract getUserInfo(): Observable<any>;
}