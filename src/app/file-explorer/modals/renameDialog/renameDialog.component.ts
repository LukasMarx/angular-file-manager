import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-renameDialog',
  templateUrl: './renameDialog.component.html',
  styleUrls: ['./renameDialog.component.css']
})
export class RenameDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RenameDialogComponent>) {}

  folderName: string;

  ngOnInit() {}
}
