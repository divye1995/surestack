import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild, TemplateRef, AfterContentInit, AfterViewInit, HostBinding } from '@angular/core';
import { FrontFaceTemplateDirective, BackFaceTemplateDirective, TopFaceTemplateDirective, BottomFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective } from '../../directives/faces.directive';
import { BehaviorSubject } from 'rxjs';
import { getShapeForAvailableFaces } from '../../helpers';
  // if only front is given is given then have a front face with default(customizable style type card) style
  // if only front and back is given then we should show only card
  // if front left and right is given then we should show a prism
  // if front back,top,bottom are available a cube with only side rotation is allowed 
  // if all 6 are given all degres are allowed
  // are rotations must be continuous for eg if scroll left 4 times i should get the front again 
  // top rotations should be similar to that of the back rotations 
  // support adding visible buttons , invisible buttons for desktops
  // adding touch gestures for mobile 
  // also support method based triggers , where people can  trigger from parent components 
  // also support auto switching
  // adding first ng-template only support 
  // indicative of on hover areas ( future issue )
  // accept size property
  // support multi sized boxes ( future issue )
  // abstract as many directives as possible. 
  // add support for non side based ( carasoul approach , with horizontal and vertical) ( future issue)
  // add touch stickyness ( very future support )

@Component({
  selector: 'ng-sure-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit,AfterContentInit{

  @HostBinding('style.height.px') get getHeight(){
    return this.height;
  }
  @HostBinding('style.width.px') get getWidth(){
    return this.width;
  }

  @ContentChild(FrontFaceTemplateDirective,{read:TemplateRef,static:true}) frontfaceTemplate : TemplateRef<any>;
  @ContentChild(BackFaceTemplateDirective,{read:TemplateRef,static:true}) backfaceTemplate : TemplateRef<any>;
  @ContentChild(TopFaceTemplateDirective,{read:TemplateRef,static:true}) topfaceTemplate : TemplateRef<any>;
  @ContentChild(BottomFaceTemplateDirective,{read:TemplateRef,static:true}) bottomfaceTemplate : TemplateRef<any>;
  @ContentChild(LeftFaceTemplateDirective,{read:TemplateRef,static:true}) leftfaceTemplate : TemplateRef<any>;
  @ContentChild(RightFaceTemplateDirective,{read:TemplateRef,static:true}) rightfaceTemplate : TemplateRef<any>;

  @ViewChild('scene',{static:false}) scene :ElementRef;
  faceKeys : string[];
  rotateYdeg:number=0;
  shape$ = new BehaviorSubject<string>(null);
  @Input() height=150;
  @Input() width=150 ;

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.shape$.next( getShapeForAvailableFaces({
      front:this.frontfaceTemplate,
      back:this.backfaceTemplate,
      top:this.topfaceTemplate,
      bottom:this.topfaceTemplate,
      right:this.rightfaceTemplate,
      left:this.bottomfaceTemplate,
    }))
  }
  onCardClick(){
    this.scene.nativeElement.style.setProperty('--rotate-y-val',`-${(++this.rotateYdeg)*180}deg`)
  }
}
