import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ComponentBase } from 'src/app/helpers/component-base.class';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { registrationInitiatedAction } from 'src/app/store/actions/user-register.actions';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent extends ComponentBase implements OnInit {
  constructor(private _fb: FormBuilder,
    route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    super(route);
  }

  ngOnInit() {
    super._ngOnInit();
    this.formGroup = this.createForm();
    this.addAddress('Home');
    this.addEmail();
    this.addPhone('Home');
    //this.addIdentification();
    this.validate()
  }
  register(){
    this.store.dispatch(new registrationInitiatedAction(this.formGroup.value))
  }
  createForm(): FormGroup {
    return this._fb.group({
      name: this._fb.group({
        firstName: [''],
        middleName: [''],
        lastName: [''],
        alias: [''],
        suffix: ['']
      }),
      emailIds: this._fb.array([]),
      addresses: this._fb.array([]),
      phones: this._fb.array([]),
      identifications: this._fb.array([]),
      dateOfBirth: [null],
      password: [''],
      userId: [''],
      id: [null]
    })
  }
  get addresses(): FormArray {
    return this.formGroup.get('addresses') as FormArray;
  }
  get phones(): FormArray {
    return this.formGroup.get('phones') as FormArray;
  }
  get identifications(): FormArray {
    return this.formGroup.get('identifications') as FormArray;
  }
  get emailIds(): FormArray {
    return this.formGroup.get('emailIds') as FormArray;
  }
  addAddress(type:string) {
    this.addresses.push(this._fb.group({
      type: [type],
      line1: [''],
      line2: [''],
      line3: [''],
      city: [''],
      state: [''],
      zip: [''],
      country: ['']
    }))
  }

  get addressGroup(): FormGroup {
    return (this.formGroup.get('addresses') as FormArray).controls[0] as FormGroup;
  }
  addPhone(type:string) {
    this.phones.push(this._fb.group({
      type: [type],
      countryCode: [''],
      lineNumber: ['']
    }))
  }
  get nameGroup(): FormGroup {
    return this.formGroup.get('name') as FormGroup;
  }
  addEmail() {
    this.emailIds.push(this._fb.control(''))
  }
  onSubmit() {
    console.log('sss', this.formGroup.value);
  }
  addIdentification() {
    this.identifications.push(this._fb.group({
      type: [''],
      idNumber: [''],
      issuedBy: [''],
      issuedDate: [''],
      expiryDate: ['']
    }))
  }

}
