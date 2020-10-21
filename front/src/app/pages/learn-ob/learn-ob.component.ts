import { Component, OnInit } from "@angular/core";
import { User } from "../../Model/learn";
import { LearnObserableService } from "../../service/learn-obserable.service";
@Component({
  selector: "app-learn-ob",
  templateUrl: "./learn-ob.component.html",
  styleUrls: ["./learn-ob.component.scss"],
})
export class LearnOBComponent implements OnInit {
  User: User[];
  Userdata: any;
  data: any;
  searchText;
  constructor(private learn: LearnObserableService) {}

  getuserData() {
    this.learn.getuser().subscribe((User: User[]) => {
      this.Userdata = User;
      this.data = this.Userdata.data;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getuserData();
    }, 3000);
  }
}
