import { Component, OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  title: string = 'Life Circle Events'
  
  ngOnInit(): void {
    console.log('On Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  ngAfterContentInit(): void {
    console.log('After Content Checked');
  }

 ngAfterViewChecked(): void {
   console.log('After View Checked');
 }

 ngAfterContentChecked(): void {
   console.log('After Content Checked');
 }

 ngOnDestroy(): void {
   console.log('On Destroy');
 }

}
