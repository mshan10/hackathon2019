import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MdcTextFieldModule, MdcTypographyModule, MdcButtonModule, MdcCardModule, MdcIconButtonModule, MdcListModule } from '@angular-mdc/web';


import { AnnounceComponent } from './announce.component';

export const ROUTES: Routes = [
  { path: 'announce', component: AnnounceComponent }
];

@NgModule({
  declarations: [AnnounceComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcTextFieldModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcCardModule,
    MdcIconButtonModule,
    MdcListModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AnnounceModule { }
