import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild, TemplateRef, AfterContentInit, AfterViewInit, HostBinding, Renderer2 } from '@angular/core';
import { FrontFaceTemplateDirective, BackFaceTemplateDirective, TopFaceTemplateDirective, BottomFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective } from '../../directives/faces.directive';
import { BehaviorSubject } from 'rxjs';
import { getShapeForAvailableFaces } from '../../helpers';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ng-sure-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit,AfterContentInit{

  @HostBinding('style')
  private get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--rotate-y-val: ${this.rotateYdeg}deg;height:${this.height}px;width:${this.width}px;`
    );
  }
  @ContentChild(FrontFaceTemplateDirective,{read:TemplateRef,static:true}) private frontfaceTemplate : TemplateRef<any>;
  @ContentChild(BackFaceTemplateDirective,{read:TemplateRef,static:true}) private backfaceTemplate : TemplateRef<any>;
  @ContentChild(TopFaceTemplateDirective,{read:TemplateRef,static:true}) private topfaceTemplate : TemplateRef<any>;
  @ContentChild(BottomFaceTemplateDirective,{read:TemplateRef,static:true}) private bottomfaceTemplate : TemplateRef<any>;
  @ContentChild(LeftFaceTemplateDirective,{read:TemplateRef,static:true}) private leftfaceTemplate : TemplateRef<any>;
  @ContentChild(RightFaceTemplateDirective,{read:TemplateRef,static:true}) private rightfaceTemplate : TemplateRef<any>;

  private rotateYdeg:number=0;
  private shape$ = new BehaviorSubject<string>(null);
  @Input() height=150;
  @Input() width=150 ;

  constructor(
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
  ) { }

  private ngOnInit() {
    
  }

  private ngAfterContentInit(){
    this.shape$.next( getShapeForAvailableFaces({
      front:this.frontfaceTemplate,
      back:this.backfaceTemplate,
      top:this.topfaceTemplate,
      bottom:this.topfaceTemplate,
      right:this.rightfaceTemplate,
      left:this.bottomfaceTemplate,
    }))
  } 

  swipeLeft(){
    this.rotateYdeg = this.rotateYdeg - 180;
  }
  swipeRight(){
    this.rotateYdeg = this.rotateYdeg + 180;
  }
}
