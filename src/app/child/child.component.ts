import {
  Component,
  Input,
  OnChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy {
  @Input() Num: any;
  constructor() {}
  ngOnChanges() {
    console.log('ngOnChanges()=>', this.Num);
  }
  ngOnInit() {
    console.log('ngOnInit()=>', this.Num);
  }
  ngDoCheck() {
    console.log('ngDoCheck()=>', this.Num);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()=>', this.Num);
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()=>', this.Num);
  }
  ngOnDestroy() {
    console.log('content has been destroyed');
  }
}
