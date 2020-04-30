import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { notes } from "../url/notes";
@Injectable({
  providedIn: "root",
})
export class SavepdfService {
  constructor(private http: HttpClient) {}

  savenotes(data) {
    return this.http.post(`${notes}/save`, data);
  }
}
