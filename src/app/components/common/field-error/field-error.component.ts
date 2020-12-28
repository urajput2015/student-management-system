import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css'],
 // changeDetection:ChangeDetectionStrategy.OnPush
})
export class FieldErrorComponent implements OnInit {
  @Input() error:string='';
  constructor() { }

  ngOnInit() {
  }

}
