import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpService } from "../../service/http.service";
@Component({
  selector: "app-http",
  templateUrl: "./http.component.html",
  styleUrls: ["./http.component.scss"],
})
export class HttpComponent implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder, private serv: HttpService) {}

  save() {
    const data = this.login.getRawValue();
    data.age = 14;
    this.serv.learnhttp(data).subscribe((res) => {
      console.log(res);
    });
  }

  // showpass(e) {
  //   const pass = document.getElementById("pass");
  //   // @ts-ignore
  //   pass.type === "password" ? (pass.type = "text") : (pass.type = "password");
  // }

  showpass(event) {
    const pass = document.querySelector(".pass");
    pass.getAttribute("type") === "password"
      ? pass.setAttribute("type", "text")
      : pass.setAttribute("type", "password");
  }

  ngOnInit(): void {
    this.validate();
  }

  validate() {
    this.login = this.fb.group({
      name: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }
}
