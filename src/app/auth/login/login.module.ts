import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcTextFieldModule, MdcTypographyModule, MdcButtonModule } from '@angular-mdc/web';

// components
import { LoginComponent } from './login.component';

export const ROUTES: Routes = [{ path: '', component: LoginComponent, outlet: 'base' }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcTextFieldModule,
    MdcTypographyModule,
    MdcButtonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class LoginModule {}
