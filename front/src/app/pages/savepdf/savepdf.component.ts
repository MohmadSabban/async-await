import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SavepdfService } from "../../service/savepdf.service";
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: "app-savepdf",
  templateUrl: "./savepdf.component.html",
  styleUrls: ["./savepdf.component.scss"],
})
export class SavepdfComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private savep: SavepdfService,
    private metaTagService: Meta,
    private titleService: Title
  ) {}
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

    // This is for title
    this.titleService.setTitle("Save PDF");
    // This is for Meta tag
    this.metaTagService.addTags([
      {
        name: "keywords",
        content: `Angular SEO Integration,
         Music CRUD,
          Angular Universal`,
      },
      { name: "robots", content: "index, follow" },
      { name: "description", content: "" },
    ]);
  }

  login_validate() {
    this.login = this.fb.group({
      file: ["", [Validators.required]],
    });
  }
}
