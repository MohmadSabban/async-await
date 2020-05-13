import { Component, OnInit } from "@angular/core";
import { GetnotesService } from "../../service/getnotes.service";
import { DownlodenotesService } from "../../service/downlodenotes.service";
import { saveAs } from "file-saver";
@Component({
  selector: "app-getnotes",
  templateUrl: "./getnotes.component.html",
  styleUrls: ["./getnotes.component.scss"],
})
export class GetnotesComponent implements OnInit {
  constructor(
    private fetch: GetnotesService,
    private downlode: DownlodenotesService
  ) {}
  notes;
  data;
  getnotes() {
    this.fetch.getnotes().subscribe((res) => {
      this.notes = res;
      console.log(this.notes);
    });
  }
  // TO Downlode FIle
  downlodenotes(id, filename) {
    this.downlode.down(id).subscribe((res) => {
      this.data = res;
      saveAs(this.data, filename);
    });
  }

  ngOnInit(): void {
    this.getnotes();
  }
}
