import { Component, OnInit } from "@angular/core";
import { quadSolver } from "quadratic-solver";
@Component({
  selector: "app-quadric",
  templateUrl: "./quadric.component.html",
  styleUrls: ["./quadric.component.scss"],
})
export class QuadricComponent implements OnInit {
  constructor() {}

  getexpr() {
    const rootsArr = quadSolver(2, 5, -3);
    console.log(rootsArr);
  }

  ngOnInit(): void {
    this.getexpr();
  }
}
