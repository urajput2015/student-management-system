import { Component, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/helpers/component-base.class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent extends ComponentBase implements OnInit {

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    super(route)
  }

  ngOnInit() {
    this.formGroup = this.createForm();
    this.validate();
  }
  createForm(): FormGroup {
    return this.fb.group({
      emailId: [''],

    });
  }

}
