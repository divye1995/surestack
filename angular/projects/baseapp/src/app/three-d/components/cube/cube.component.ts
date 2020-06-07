import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackFaceTemplateDirective, BottomFaceTemplateDirective, FrontFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective, TopFaceTemplateDirective } from '../../directives/faces.directive';
import { getRotateFactor, getShapeForAvailableFaces } from '../../helpers';

@Component({
  selector: 'ng-sure-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit,AfterContentInit,OnDestroy{

  @HostBinding('style')
  private get style() {
    return this.sanitizer.bypassSecurityTrustStyle(

      `--face-size:${this.size}px;--rotate-y-val: ${this.rotateYdeg}deg;height:${this.size}px;width:${this.size}px;`
    );
  }
  @ContentChild(FrontFaceTemplateDirective,{read:TemplateRef,static:true}) private frontfaceTemplate : TemplateRef<any>;
  @ContentChild(BackFaceTemplateDirective,{read:TemplateRef,static:true}) private backfaceTemplate : TemplateRef<any>;
  @ContentChild(TopFaceTemplateDirective,{read:TemplateRef,static:true}) private topfaceTemplate : TemplateRef<any>;
  @ContentChild(BottomFaceTemplateDirective,{read:TemplateRef,static:true}) private bottomfaceTemplate : TemplateRef<any>;
  @ContentChild(LeftFaceTemplateDirective,{read:TemplateRef,static:true}) private leftfaceTemplate : TemplateRef<any>;
  @ContentChild(RightFaceTemplateDirective,{read:TemplateRef,static:true}) private rightfaceTemplate : TemplateRef<any>;
  
  private rotateYdeg:number=0;
  private rotateFactor: number = 0; 
  private shape : string;
  @Input() size=150;
  @Input() id! : string;

  constructor(
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    
  }
 

  ngAfterContentInit(){
    var faces = {
      front:this.frontfaceTemplate,
      back:this.backfaceTemplate,
      top:this.topfaceTemplate,
      bottom:this.bottomfaceTemplate,
      right:this.rightfaceTemplate,
      left:this.leftfaceTemplate,
    };
    this.shape = getShapeForAvailableFaces(faces);
    this.rotateFactor = getRotateFactor(this.shape)
  } 

  swipeLeft(){
    this.rotateYdeg = this.rotateYdeg - this.rotateFactor;
  }
  swipeRight(){
    this.rotateYdeg = this.rotateYdeg + this.rotateFactor;
  }
}
