import { NgModule } from '@angular/core';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // for [(ngModel)]
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { 
  MdcTextFieldModule, 
  MdcTypographyModule, 
  MdcButtonModule, 
  MdcCardModule, 
  MdcIconButtonModule, 
  MdcRippleModule, 
  MdcListModule,
  MdcCheckboxModule,
  MdcTopAppBarModule  
} from '@angular-mdc/web';


// import components
import { MainComponent } from './main.component';
import { CalendarComponent } from './calendar/calendar.component';

export const ROUTES: Routes = [
  { path: 'main', component: MainComponent }
];

@NgModule({
  declarations: [MainComponent, CalendarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcTextFieldModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcCardModule,
    MdcIconButtonModule,
    MdcRippleModule,
    MdcListModule,
    MdcCheckboxModule,
    MdcTopAppBarModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class MainModule { }
