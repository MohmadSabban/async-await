import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SavepdfService } from "../../service/savepdf.service";
@Component({
  selector: "app-savepdf",
  templateUrl: "./savepdf.component.html",
  styleUrls: ["./savepdf.component.scss"],
})
export class SavepdfComponent implements OnInit {
  constructor(private fb: FormBuilder, private savep: SavepdfService) {}
  login: FormGroup;
  Filepath;

  file(event) {
    if (event.target.files.length > 0) {
      this.Filepath = event.target.files[0];
      console.log(this.Filepath);
    }
  }

  save() {
    const data = this.login.getRawValue();
    let aData = new FormData();
    aData.append("file", this.Filepath);
    this.savep.savenotes(aData).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    this.login_validate();
  }

  login_validate() {
    this.login = this.fb.group({
      file: ["", [Validators.required]],
    });
  }
}
