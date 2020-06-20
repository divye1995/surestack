import { Component,OnInit, ViewChild, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { CubeComponent } from './three-d/components/cube/cube.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit{
  @ViewChildren(CubeComponent) private components: QueryList<CubeComponent>;
  shapes :{[k:string]:CubeComponent}={};
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
    this.shapes['card'].swipeLeft();
    this.shapes['prism'].swipeLeft();
    this.shapes['cube'].swipeLeft()

    
  }
  swipeRight(){
    this.shapes['card'].swipeRight();
    this.shapes['prism'].swipeRight();
    this.shapes['cube'].swipeRight()

  }
  swipeTop(){
    this.shapes['cube'].swipeTop()
  }
  swipeBottom(){
    this.shapes['cube'].swipeBottom()
  }
  ngAfterViewInit(){
    this.shapes = this.components.reduce((acc,curr)=>({...acc,[curr.id]:curr}),{});
    this.buttonDisabled = false
  }
}
