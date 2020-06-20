import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ThreeDModule} from 'threedview'
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ThreeDModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
