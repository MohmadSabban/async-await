import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { notes } from "../url/notes";
import { Observable, observable } from "rxjs";
import { User } from "../Model/learn";
@Injectable({
  providedIn: "root",
})
export class LearnObserableService {
  constructor(private http: HttpClient) {}

  getuser(): Observable<User[]> {
    return this.http.get<User[]>(`${notes}/getuser`);
  }
}
