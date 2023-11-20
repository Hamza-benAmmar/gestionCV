import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  merge,
  reduce,
  scan,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrl: './rx-js.component.css',
})
export class RxJsComponent {
  formgroup: FormGroup;
  strm1: Subject<number>;
  strm2: Subject<number>;
  scan: Observable<number>;
  merge: Observable<number>;
  reduce: Observable<number>;
  constructor() {
    this.formgroup = new FormGroup({
      stream1: new FormControl(),
      stream2: new FormControl(),
    });
    this.strm1 = new Subject<number>();
    this.strm2 = new Subject<number>();

    const val1 = this.formgroup
      .get('stream1')!
      .valueChanges.pipe(debounceTime(400), takeUntil(this.strm1)); // to avoid repetition
    const val2 = this.formgroup
      .get('stream2')!
      .valueChanges.pipe(debounceTime(400), takeUntil(this.strm2));
    this.merge = merge(val1, val2);
    this.reduce = this.merge.pipe(
      reduce((total, currentvalue) => total + currentvalue, 0)
    );

    this.scan = this.merge.pipe(
      scan((total, currentValue) => total + currentValue, 0)
    );
  }
  endStreaming1() {
    this.strm1.next(null); //notify the subject that it should end emitting vals
    this.strm1.complete();
  }
  endStreaming2() {
    this.strm2.next(null);
    this.strm2.complete();
  }
}
