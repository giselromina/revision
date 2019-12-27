import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSliderModule,
  MatProgressBarModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule, MatGridListModule } from '@angular/material';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { ListLayoutComponent } from './components/list-layout/list-layout.component';
import { TableComponent } from './components/table/table.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { LockDialogComponent } from './components/lock-dialog/lock-dialog.component';
import { TranslateHeaderPipe } from './pipes/translate-header.pipe';
import { TranslateBooleansPipe } from './pipes/translate-booleans.pipe';

@NgModule({
  declarations: [
    FormLayoutComponent,
    ListLayoutComponent,
    TableComponent,
    DeleteDialogComponent,
    LockDialogComponent,
    TranslateBooleansPipe,
    TranslateHeaderPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  entryComponents: [
    DeleteDialogComponent,
    LockDialogComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    LayoutModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    FormLayoutComponent,
    ListLayoutComponent,
    TableComponent,
    DeleteDialogComponent,
    LockDialogComponent
  ]
})
export class SharedModule { }
