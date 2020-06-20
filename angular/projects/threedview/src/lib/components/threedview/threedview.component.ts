import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BackFaceTemplateDirective, BottomFaceTemplateDirective, FrontFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective, TopFaceTemplateDirective, DefaultFaceTemplateDirective } from '../../directives/faces.directive';
import { getRotateFactor, getShapeForAvailableFaces } from '../../helpers';
import {SHAPE_CARD,SHAPE_PRISM,SHAPE_CUBE} from '../../constants'


@Component({
  selector: 'three-d-view',
  templateUrl: './threedview.component.html',
  styleUrls: ['./threedview.component.scss']
})
export class ThreeDViewComponent implements OnInit,AfterContentInit{
  
  @HostBinding('style')
  get style() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `--face-size:${this.size}px;
      --rotate-y-val: ${this.rotateValues.rotateYdeg}deg;
      --rotate-x-val: ${this.rotateValues.rotateXdeg}deg;
      --rotate-z-val: ${this.rotateValues.rotateZdeg}deg;
      height:${this.size}px;
      width:${this.size}px;
      display:inline-block;
      --defaultCardColor:${this.defaultCardColor};
      `
    );
  }
  @ContentChild(FrontFaceTemplateDirective,{read:TemplateRef,static:true}) frontfaceTemplate : TemplateRef<any>;
  @ContentChild(BackFaceTemplateDirective,{read:TemplateRef,static:true})  backfaceTemplate : TemplateRef<any>;
  @ContentChild(TopFaceTemplateDirective,{read:TemplateRef,static:true})  topfaceTemplate : TemplateRef<any>;
  @ContentChild(BottomFaceTemplateDirective,{read:TemplateRef,static:true})  bottomfaceTemplate : TemplateRef<any>;
  @ContentChild(LeftFaceTemplateDirective,{read:TemplateRef,static:true})  leftfaceTemplate : TemplateRef<any>;
  @ContentChild(RightFaceTemplateDirective,{read:TemplateRef,static:true})  rightfaceTemplate : TemplateRef<any>;
  @ContentChild(DefaultFaceTemplateDirective,{read:TemplateRef,static:true})  defaultFaceTemplate : TemplateRef<any>;


  
  SHAPES = {SHAPE_CARD,SHAPE_PRISM,SHAPE_CUBE}

  rotateValues = {
    rotateXdeg:0,
    rotateYdeg:0,
    rotateZdeg:0,
  }
  rotateFactor: number = 0; 
  shape : string;
  @Input() size=100;
  @Input() id! : string;
  @Input() defaultCardColor : string;

  constructor(
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

  rotateAboutAxis(axis:string,by:number=0){
    // if asked to rotate about a and a !=x && a !=+ve then resent
    // and if 
    if(axis==='y'){
      this.rotateValues = {
          ...this.rotateValues,
          ...this.shape === SHAPE_CUBE && this.rotateValues.rotateXdeg%360!==0 ?{rotateXdeg:0}:{},
          rotateYdeg:this.rotateValues.rotateYdeg + by
      }
    }
    if(axis === 'x'){
      this.rotateValues = {
        ...this.rotateValues,
        ...this.shape === SHAPE_CUBE && this.rotateValues.rotateYdeg%360!==0?{rotateYdeg:0}:{},
        rotateXdeg:this.rotateValues.rotateXdeg + by
      }
    }
  }

  swipeLeft(){
    this.rotateAboutAxis('y',-this.rotateFactor);
  }
  swipeRight(){
    this.rotateAboutAxis('y',(this.rotateFactor));
  }
  swipeTop(){
    console.log(this.shape)
    if(this.shape === SHAPE_CUBE) this.rotateAboutAxis('x',this.rotateFactor);
  }
  swipeBottom(){
    if(this.shape === SHAPE_CUBE) this.rotateAboutAxis('x',-this.rotateFactor);
  }
}
