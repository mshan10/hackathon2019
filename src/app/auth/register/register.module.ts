import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdcTextFieldModule, MdcTypographyModule, MdcButtonModule, MdcIconButtonModule } from '@angular-mdc/web';


// components
import { RegisterComponent } from './register.component';
import { NameComponent } from './name/name.component';
import { NetidComponent } from './netid/netid.component';
import { SetupComponent } from './setup/setup.component';
import { SubscriptionComponent } from './subscription/subscription.component';

export const ROUTES: Routes = [
  // { path: '', component: RegisterComponent, outlet: 'base' },
  { path: '', component: NameComponent },
  { path: 'netid', component: NetidComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'subscription', component: SubscriptionComponent }
];

@NgModule({
  declarations: [RegisterComponent, NameComponent, NetidComponent, SetupComponent, SubscriptionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdcTextFieldModule,
    MdcTypographyModule,
    MdcButtonModule,
    MdcIconButtonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class RegisterModule {}
