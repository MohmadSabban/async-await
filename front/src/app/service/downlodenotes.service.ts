import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { notes } from "../url/notes";
@Injectable({
  providedIn: "root",
})
export class DownlodenotesService {
  constructor(private http: HttpClient) {}

  down(id) {
    return this.http.get(`${notes}/downlode/${id}`, {
      responseType: "blob",
    });
  }
}
