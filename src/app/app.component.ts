import { Component } from '@angular/core';
import {AlertDangerComponent} from './alert-danger/alert-danger.component';
import {AlertSuccessComponent} from './alert-success/alert-success.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="text" value="{{title}}">
      <input type="text" [value]="title">
      <input type="text" bind-value="title">
      <input type="button" disabled value="Sample">
      <input type="button" [disabled]="!isModified" value="Sample">
      <input type="button" [hidden]="isHidden" value="{{title}}">
      <hr>
      Title: {{goodTitle}}
      <br>
      <div [innerHTML]="goodTitle"></div>
      <hr>
      <input type="button" (click)="onClick()" value="Hit me...">
      <button on-click="onClick()">Hit me...</button>
      <br>
      <!-- <img src="/assets/images/logo.svg" alt="Logo svg" (mouseover)="onMouseOver($event)" (mouseout)="onMouseOut($event)">  {{eventType}} -->
      <br>
      <img src="/assets/images/logo.svg" alt="Logo svg" (mouseover)="onMouse($event)" (mouseout)="onMouse($event)">  {{eventType}}
      <hr>
      <input type="text" (keyup)="onKey($event)">
      <br>
      Keypress: {{keys}}, KeyValues: {{keyValue}}
      <br>
      <img #img1 src="/assets/images/logo.svg" alt="Logo svg" (mouseover)="img1.src='/assets/images/item-4.jpeg'" (mouseout)="img1.src='/assets/images/logo.svg'">  {{eventType}}
      <br>
      <input #key1 (keyup)="0">
      <p>{{key1.value}}</p>
      <br>
      <input #key2 (keyup.enter)="onKey2(key2.value)">: {{keyValue2}}
      <input #key2 (keyup.enter)="onKey2(key2.value)" (blur)="onKey2(key2.value)">: {{keyValue2}}
      <input #key2 (keyup.enter)="onKey2(key2.value)" (change)="onKey2(key2.value)">: {{keyValue2}}
      <hr> Two Way Binding <hr>
      <app-person></app-person>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Olatunji Omisakin";
  isModified: boolean = true;
  isHidden: boolean = true;
  goodTitle = `<span>Title: <script>alert('goodness never sleeps!')</script></span>`;
  eventType: string = "";
  keys: string = "";
  keyValue: string = "";
  keyValue2: string = "";

  onClick() {
    alert('Clicked.')
  }

//  onMouseOver(evt: any) {
//    evt.target.src = "/assets/images/item-4.jpeg";
//    this.eventType = evt.type;
//  }

//  onMouseOut(evt: any) {
//    evt.target.src = "/assets/images/logo.svg";
//    this.eventType = evt.type
//  }

    onMouse(evt: any) {
      if(evt.type === "mouseover") {
        evt.target.src = "/assets/images/item-4.jpeg";
      } else {
        evt.target.src = "/assets/images/logo.svg";
      }
    }

    onKey(evt: any) {
      this.keys += evt.key;
      this.keyValue = evt.target.value;
    }

    onKey2(value: string) {
      //this.keyValue2 = value;
      alert(value)
    }
}
