import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const git_url = 'https://api.github.com/users';

@Injectable({
    providedIn: 'root'
})
export class GitService {
    constructor(private http: HttpClient) {}

    public getUsers(): Observable<any> {
        return this.http.get(git_url);
    }

}