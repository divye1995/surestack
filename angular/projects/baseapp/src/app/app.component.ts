import { Component,OnInit } from '@angular/core';
import {printHello} from '@surestack/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    printHello();
  }
  title = 'baseapp';
}
