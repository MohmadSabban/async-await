import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-using-for",
  templateUrl: "./using-for.component.html",
  styleUrls: ["./using-for.component.scss"],
})
export class UsingForComponent implements OnInit {
  constructor() {}

  public name = [
    { name: "sabban" },
    { name: "dj" },
    { name: "sabban" },
    { name: "dj" },
    { name: "rahul" },
  ];

  ngOnInit(): void {}
}
