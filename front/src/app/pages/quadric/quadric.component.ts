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

  reversearray() {
    const data = [
      { name: "sabban", no: 4 },
      { name: "rahul", no: 3 },
      { name: "dj", no: 2 },
      { name: "jd", no: 1 },
    ];
    const newdata = [...data].reverse();

    data.map((e) => console.log(`orignal data :- ${e.no}`));
    newdata.map((b) => console.log(`Reverse data :- ${b.name}  ${b.no} `));
  }

  ngOnInit(): void {
    // this.getexpr();
    this.reversearray();
  }
}
