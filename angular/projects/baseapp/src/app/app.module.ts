import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyLibModule} from 'my-lib'
import { AppComponent } from './app.component';
import { ThreeDModule } from './three-d/three-d.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    MyLibModule,
    ThreeDModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
