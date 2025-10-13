import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButton, MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialog,
} from '@angular/material/dialog';

export const testDialogOptions = {
  id: 'spectator-example-dialog',
  width: '250px',
  data: { name: 'Spectator', animal: 'Dog' },
} as const;

@Component({
  selector: 'app-button',
  template: ` <button type="button" matButton="elevated" (click)="openDialog()">Open Dialog</button> `,
  imports: [MatButton],
  styles: [],
})
export class TestHarnessesComponent {
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(TestDialogComponent, testDialogOptions);
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <h2 mat-dialog-title>Hi {{ data.name }}</h2>
    <mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <mat-label>Favorite Animal</mat-label>
        <input matInput [(ngModel)]="animal" />
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton (click)="onNoClick()">No Thanks</button>
      <button matButton [mat-dialog-close]="animal()" cdkFocusInitial>Ok</button>
    </mat-dialog-actions>
  `,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class TestDialogComponent {
  readonly dialogRef = inject(MatDialogRef<TestDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
