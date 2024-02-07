import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MatMiniFabButton } from "@angular/material/button";

@Component({
    selector: "app-station-dialog",
    templateUrl: "./station-dialog.component.html",
    styleUrls: ["./station-dialog.component.scss"],
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatMiniFabButton,
        MatIcon,
    ],
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
