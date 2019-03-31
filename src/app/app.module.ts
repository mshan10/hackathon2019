import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { MainModule } from 'src/app/main/main.module';
import { AnnounceModule } from 'src/app/announce/announce.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MainModule,
    AnnounceModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
