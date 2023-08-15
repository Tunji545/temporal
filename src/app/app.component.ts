import { Component } from '@angular/core';
import {AlertDangerComponent} from './alert-danger/alert-danger.component';
import {AlertSuccessComponent} from './alert-success/alert-success.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
    Welcome to {{title}}
    <br>
    1 + 1 = {{ 1 + 1}}
    <br>
    Add(1 + 1) + 5 = {{Add(1, 1) + 5}} 
    <br>
    10 is incremented and then the value is {{increment(10)}}
    <br>
   <button type="button" (click)="toggle()">Toggle Button</button>
   <div *ngIf="show; then ifPart; else elsePart">This is Visible</div>
     <hr>
   <span [ngSwitch]="Duration">
    <span *ngSwitchCase="1">One Day</span>
    <span *ngSwitchCase="7">One Week</span>
    <span *ngSwitchCase="30">One Month</span>
    <span *ngSwitchDefault>Check the value</span>
   </span>
   <hr>
   <p>Subjects
    <span *ngFor="let s of Subjects; let i = index">
      <span *ngIf="i !== 0">,</span>
      {{s}}
    </span>
  </p>
  <p>Subjects
    <ng-template ngFor let-s [ngForOf]="Subjects"  let-i="index">
      <ng-template [ngIf]="i !== 0">
        <span>,</span>
      </ng-template>
      {{s}}
    </ng-template>
  </p>
  <br>
  <select [(ngModel)]="selectedSubject1">
    <option *ngFor="let s of Subjects" [value]="s">
      <ng-container *ngIf="s !== 'SharePoints'">
        {{s}}
      </ng-container>
    </option>
  </select>
  <select [(ngModel)]="selectedSubject2">
    <ng-container *ngFor="let s of Subjects">
      <ng-container *ngIf="s !== 'SharePoints'">
        <option value="{{s}}">{{s}}</option>
      </ng-container>
    </ng-container>
  </select>
  <hr>
  <br>
  <app-life-cycle></app-life-cycle>
  <br>
  <ng-container *ngComponentOutlet="alert"></ng-container>
  <input type="button" value="toggle alert" (click)="showAlert()">
  <br>
  <app-employee></app-employee>
  <br>
  <app-employees></app-employees>
  </div>
    <ng-template #ifPart>
    <div>This is the if part</div>
    </ng-template>
    <ng-template #elsePart>
    <div>This is the else part</div>
    </ng-template>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olatunji Omisakin';
  show: boolean = true;
  Duration: number = 1;
  Subjects: string[] = ["MS.NET", 'Java', "SharePoints"];
  selectedSubject1: string = "Java";
  selectedSubject2: string = "Java";
  alert = AlertSuccessComponent;

  Add(a: number, b: number): number {
    return a + b;
  }

  increment(operand: number): number {
    return ++operand;
  }

  toggle(): void {
    if(this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  showAlert() {
    if(this.alert === AlertSuccessComponent) {
      this.alert = AlertDangerComponent;
    } else {
      this.alert = AlertSuccessComponent;
    }
  }
}
