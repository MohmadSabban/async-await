import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { user } from "../url/notes";
@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  learnhttp(data) {
    return this.http.post(`${user}/formdata`, data, {
      params: { na: "sabban", data: "http" },
      headers: { ta: "header" },
      responseType: "json",
    });
  }
}
