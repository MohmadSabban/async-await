import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { notes } from "../url/notes";
@Injectable({
  providedIn: "root",
})
export class GetnotesService {
  constructor(private http: HttpClient) {}

  getnotes() {
    const headers = new HttpHeaders();
    headers.set("Content-Type: text/html", "application/json");
    return this.http.get(`${notes}/fetch`, { headers: headers });
  }
}
