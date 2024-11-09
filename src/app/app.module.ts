import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      LoginComponent  
    ],
    imports: [
      BrowserModule,
      FormsModule,  
      RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  