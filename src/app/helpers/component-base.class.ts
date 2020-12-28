import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormValidationHelper } from './form-validation-helper';
import { ActivatedRoute } from '@angular/router';

export abstract class ComponentBase  {
protected schema: string;
 formGroup:FormGroup;
protected constructor( private _route: ActivatedRoute)
{
    
}

_ngOnInit()
{
    this.schema = this._route.snapshot.data['schema'];
}
validate()
{
    FormValidationHelper.validateForm(this.formGroup, this.schema);
}


 
}