import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThreeDViewComponent} from './components/threedview/threedview.component'
import { FrontFaceTemplateDirective, BackFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective, TopFaceTemplateDirective, BottomFaceTemplateDirective, DefaultFaceTemplateDirective } from './directives/faces.directive';

@NgModule({
  declarations: [
    ThreeDViewComponent,
    FrontFaceTemplateDirective,
    BackFaceTemplateDirective,
    LeftFaceTemplateDirective,
    RightFaceTemplateDirective,
    TopFaceTemplateDirective,
    BottomFaceTemplateDirective,
    DefaultFaceTemplateDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ThreeDViewComponent,
    FrontFaceTemplateDirective,
    BackFaceTemplateDirective,
    LeftFaceTemplateDirective,
    RightFaceTemplateDirective,
    TopFaceTemplateDirective,
    BottomFaceTemplateDirective,
    DefaultFaceTemplateDirective,
  ]
})
export class ThreeDModule { }
