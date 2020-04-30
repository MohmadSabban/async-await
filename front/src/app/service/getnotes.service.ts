import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { notes } from "../url/notes";
@Injectable({
  providedIn: "root",
})
export class GetnotesService {
  constructor(private http: HttpClient) {}

  getnotes() {
    return this.http.get(`${notes}/fetch`);
  }
}
