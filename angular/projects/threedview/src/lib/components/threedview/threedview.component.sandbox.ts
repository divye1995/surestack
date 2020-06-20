import { sandboxOf } from 'angular-playground';
import { ThreeDViewComponent } from './threedview.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeDModule } from '../../threedview.module';
import { templateDirectives } from '../../directives/faces.directive';

export default sandboxOf(ThreeDViewComponent,{
    schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
    declarations:[
        ...templateDirectives
    ]
})
  .add('CardView', {
    template: ` <three-d-view [size]="100" [defaultCardColor]="'#34c0eb'">
    <ng-template  front>
    <div [ngStyle]="{'height':'100%','background':'blue'}">
    front
    </div>
</ng-template>
</three-d-view>`
  });