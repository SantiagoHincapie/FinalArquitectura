import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PrimeModule } from './prime/prime.module';
import { MensajeComponent } from './components/mensaje/mensaje.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MensajeComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
