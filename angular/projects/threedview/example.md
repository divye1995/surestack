
example.component.html

```html 
<!--Card-->
 <ng-sure-cube [size]="100" id="card" [defaultCardColor]="'#34c0eb'">
    <ng-template  front>
      <div [ngStyle]="{'height':'100%','background':'blue'}">
        front
      </div>
    </ng-template>
    <ng-template >
      
    </ng-template>
</ng-sure-cube>

```

[//]:<> put image or live example link for card

```html
<ng-sure-cube [size]="100" id="prism">
    <ng-template  front>
      <div [ngStyle]="{'height':'100%','background':'blue'}">
        front
      </div>
    </ng-template>
    <ng-template left>
      <div [ngStyle]="{'height':'100%','background':'green'}">
        left
      </div>
    </ng-template>
    <ng-template right>
      <div [ngStyle]="{'height':'100%','background':'red'}">
        right
      </div>
    </ng-template>
</ng-sure-cube>

```

[//]:<> put image or live example link for prism 


```html
<ng-sure-cube [size]="100" id="cube">
    <ng-template  front>
      <div [ngStyle]="{'height':'100%','background':'blue'}">
        front
      </div>
    </ng-template>
    <ng-template back>
      <div [ngStyle]="{'height':'100%','background':'orange'}">
        back
      </div>
    </ng-template>
    <ng-template top>
      <div [ngStyle]="{'height':'100%','background':'grey'}">
        top
      </div>
    </ng-template>
    <ng-template bottom>
      <div [ngStyle]="{'height':'100%','background':'blue'}">
        bottom
      </div>
    </ng-template>
    <ng-template default>
      <div [ngStyle]="{'height':'100%','background':'red'}">
        default
      </div>
    </ng-template>
  </ng-sure-cube>
```

```javascript
// create a content child for swiping left or right or top or bottom
  @ViewChild(CubeComponent) private cube: CubeComponent;
  // to swipe the cube 
    cube.swipeLeft();
    cube.swipeRight();
    cube.swipeTop();
    cube.swipeBottom();
```