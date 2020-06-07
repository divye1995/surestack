import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
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
}
