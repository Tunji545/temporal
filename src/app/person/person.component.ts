import { Component } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-person',
  template: `
    <form>
      First Name: <input type="text" [value]="person.firstName" (input)="person.firstName=$any($event.target).value">
      Last Name: <input type="text" #txt1 [value]="person.lastName" (input)="person.lastName=txt1.value">
      <br>
      Hello: {{person.firstName + " " + person.lastName}}
    </form>
    <form>
      First Name: <input type="text" name="firstName" [(ngModel)]="person.firstName">
      Last Name: <input type="text" name="lastName" [ngModel]="person.lastName" (ngModelChange)="person.lastName=changeToUppercase($event)">
      <br>
      Hello: {{person.firstName + " " + person.lastName}}
    </form>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  person: Person = new Person('Olatunji', 'Omisakin');

  changeToUppercase(value: string): string {
    return value.toUpperCase();
  }
}
