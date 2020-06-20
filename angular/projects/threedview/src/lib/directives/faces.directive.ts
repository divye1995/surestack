import { Directive, TemplateRef } from "@angular/core";

@Directive({selector:'[front]'})
export class FrontFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}
@Directive({selector:'[back]'})
export class BackFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}
@Directive({selector:'[left]'})
export class LeftFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}
@Directive({selector:'[right]'})
export class RightFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}
@Directive({selector:'[top]'})
export class TopFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}
@Directive({selector:'[bottom]'})
export class BottomFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}


@Directive({selector:'[default]'})
export class DefaultFaceTemplateDirective{
    constructor(templateRef : TemplateRef<any>){}
}