import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormValidationHelper } from 'src/app/helpers/form-validation-helper';
import { ActivatedRoute } from '@angular/router';
import { ComponentBase } from 'src/app/helpers/component-base.class';
import { Store } from '@ngrx/store';

import { loginAction, loginSuccessAction } from 'src/app/store/actions/login-actions';
import { AppState } from 'src/app/store/reducers';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends ComponentBase implements OnInit {

  constructor(private _fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    super(route);
  }

  ngOnInit() {
   
    super._ngOnInit();
    this.formGroup = this.createLoginForm();
    this.validate();

  }

  createLoginForm(): FormGroup {
    return this._fb.group({
      userId: [''],
      password: ['']
    })
  }


  onSubmit() {
    console.log('this.formGroup.valid',this.formGroup.valid)
    FormValidationHelper.validateForm(this.formGroup, this.schema);
   
    if (this.formGroup.valid) {
      this.store.dispatch(new loginAction(this.formGroup.value))
    }
    console.log('dddddddddddddd');
  }

}
