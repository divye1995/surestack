import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CubeComponent} from './components/cube/cube.component'
import { FrontFaceTemplateDirective, BackFaceTemplateDirective, LeftFaceTemplateDirective, RightFaceTemplateDirective, TopFaceTemplateDirective, BottomFaceTemplateDirective } from './directives/faces.directive';

@NgModule({
  declarations: [
    CubeComponent,
    FrontFaceTemplateDirective,
    BackFaceTemplateDirective,
    LeftFaceTemplateDirective,
    RightFaceTemplateDirective,
    TopFaceTemplateDirective,
    BottomFaceTemplateDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CubeComponent,
    FrontFaceTemplateDirective,
    BackFaceTemplateDirective,
    LeftFaceTemplateDirective,
    RightFaceTemplateDirective,
    TopFaceTemplateDirective,
    BottomFaceTemplateDirective,
  ]
})
export class ThreeDModule { }
