import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent implements OnInit {
  constructor() {}

  // Confirm BOx
  confimr() {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        console.log(
          "delete" + " " + "Now you can fire database delete command"
        );
      } else {
        console.log("no del");
      }
    });
  }

  // Taking value from user
  in() {
    Swal.fire({
      input: "text",
      inputPlaceholder: "Enter Name",
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        console.log(result.value);
      }
    });
  }

  ngOnInit(): void {}
}
