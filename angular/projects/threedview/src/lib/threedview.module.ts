import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ThreeDViewComponent} from './components/threedview/threedview.component'
import { templateDirectives,FrontFaceTemplateDirective, BackFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective, TopFaceTemplateDirective, BottomFaceTemplateDirective, DefaultFaceTemplateDirective } from './directives/faces.directive';

@NgModule({
  declarations: [
    ThreeDViewComponent,
    ...templateDirectives
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ThreeDViewComponent,
    ...templateDirectives
  ]
})
export class ThreeDModule { }
