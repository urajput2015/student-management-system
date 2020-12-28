import { FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
declare var require: any;
var Ajv = require('ajv');
const ajv = new Ajv({ v5: true, allErrors: true })
const pointer = require('json-pointer');
const jsonPath = require('jsonpath');

export class FormValidationHelper {
    static validateForm(formGroup: FormGroup, schema: string): string[] {
        console.log('formGroup',formGroup);
        console.log('schema',schema);
        this.removeValidations(formGroup);
        this.applyRequiredFieldsValidations(formGroup, schema);
        this.applyOtherValidations(formGroup, schema);
        return null;
    }

    private static removeValidations(formGroup: FormGroup) {
        if (formGroup) {
            Object.keys(formGroup.controls).forEach(key => {
                const ctrl = formGroup.get(key);
                if (ctrl instanceof FormGroup) {
                    this.removeValidations(ctrl);
                } else {
                    ctrl.setValidators([]);
                    ctrl.markAsTouched();
                    ctrl.updateValueAndValidity();
                }
            })
        }
    }
    private static applyControlsValidations(formGroup: FormGroup, errors) {
        errors.forEach(error => {
        
            if (error.dataPath === '') {
                if (error.keyword === 'required') {
                    const control = formGroup.get(error.params.missingProperty);
                    const validators = control?.validator;
                    if (validators) {
                        control?.setValidators([Validators.required, validators])
                    } else {
                        control?.setValidators([Validators.required])
                    }
                    control?.updateValueAndValidity();
                } 
            }else {
              
                let dataPath = error.dataPath;
                dataPath = dataPath.replace('then/', '');
                const pathTokens = dataPath.split('.');
                const group = this.getFormControl(formGroup, pathTokens);
                if (group) {

                    if (error.keyword === 'required') {
                        const ctrl = group.get(error.params.missingProperty);
                        if (ctrl) {
                            const validators = ctrl.validator;
                            if (validators) {
                                ctrl.setValidators([Validators.required, validators])
                            } else {
                                ctrl.setValidators([Validators.required])
                            }
                        }
                        ctrl.updateValueAndValidity();
                    } else if (error.keyword === 'minLength') {
                        const validators = group.validator;
                        if (validators) {
                            group?.setValidators([Validators.minLength(error.params.limit), validators])
                        } else {
                            group?.setValidators([Validators.minLength(error.params.limit)])
                        }
                        group?.updateValueAndValidity();
                    } else if (error.keyword === 'maxLength') {
                       
                        const validators = group?.validator;
                        if (validators) {
                            group?.setValidators([Validators.maxLength(error.params.limit), validators])
                        } else {
                            group?.setValidators([Validators.maxLength(error.params.limit)])
                        }
                        group?.updateValueAndValidity();
                    }
                    else if (error.keyword === 'pattern') {
                       
                        const validators = group?.validator;
                        if (validators) {
                            group?.setValidators([Validators.pattern(error.params.pattern), validators])
                        } else {
                            group?.setValidators([Validators.pattern(error.params.pattern)])
                        }
                        group?.updateValueAndValidity();
                    }

                }
            }
        })
    }
    static getFormControl(formGroup: FormGroup, pathTokens: string[]) {
        let group = formGroup;
        pathTokens.shift();
        while (group && pathTokens.length > 0) {
            let token = pathTokens.shift();
            token = token.replace('[0]', '');
            if (group?.get(token) instanceof FormArray) {
                group = (group?.get(token) as FormArray).controls[0] as FormGroup;
            } else {
                group = group?.get(token) as FormGroup;
            }
        }
        return group;
    }

    private static applyRequiredFieldsValidations(formGroup: FormGroup, schema: string) {
        const clone = JSON.parse(JSON.stringify(formGroup.value));
        this.removeEmpty(clone);
        const formMissingErrors = this.validateUsingAJV(schema, clone);
        if (formMissingErrors) {
            this.applyControlsValidations(formGroup, formMissingErrors);
        }


    }

    private static applyOtherValidations(formGroup: FormGroup, schema: string) {
        const clone = JSON.parse(JSON.stringify(formGroup.value));
        this.assignInvalidValues(clone);
        const formInvalidErrors = this.validateUsingAJV(schema, clone);
        
        if (formInvalidErrors) {
            this.applyControlsValidations(formGroup, formInvalidErrors);
        }

    }

    private static buildHumanReadableErrors(errors: string[], schema: string) {

    }

    private static validateUsingAJV(schema: string, data: string) {
        const validate = ajv.compile(schema);
        validate(data);
        return validate.errors;
    }

    private static assignInvalidValues(data) {
        Object.keys(data).forEach(key => {
            if (data[key] && typeof data[key] === 'object') {
                this.assignInvalidValues(data[key]);
            } else {
                data[key] = 'sfjfjs83843843844j34343nsfjkjfskfskfsri434i343jmm~83***~~)(jdjsdjsdjsdjsdsdsdjsdj/.,[];sdsd';
            }
        })
    }

    private static removeEmpty(obj) {
        Object.keys(obj).forEach(key => {
            if (obj[key] && typeof obj[key] === 'object') {
                this.removeEmpty(obj[key]);
            } else if (obj[key] == null || obj[key] === '') {
                delete obj[key];
            }
        });
    }


}
