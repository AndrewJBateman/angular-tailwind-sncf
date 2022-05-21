import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-station-dialog",
  templateUrl: "./station-dialog.component.html",
  styleUrls: ["./station-dialog.component.scss"],
})
export class StationDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<StationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {}

  onCloseDialog = () => {
    this.dialogRef.close();
  };
}
