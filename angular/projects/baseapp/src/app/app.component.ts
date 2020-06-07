import { Component,OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CubeComponent } from './three-d/components/cube/cube.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChild(CubeComponent,{static:false}) private cube :CubeComponent;
  buttonDisabled:boolean = true;
  ngOnInit(){
  }
  title = 'baseapp';
  faces=[
    "face1",
    "face2",
    "face3",
    "face4",
    "face5",
    "face6",
    "face7",
    "face8",
  ]
  
  swipeLeft(){
    this.cube.swipeLeft();
  }
  swipeRight(){
    this.cube.swipeRight();
  }
  ngAfterViewInit(){
    this.buttonDisabled = false
  }
}
