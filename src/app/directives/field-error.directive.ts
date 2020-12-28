import { Directive, ElementRef, ViewContainerRef, OnChanges, AfterContentChecked, Renderer2, Inject, TemplateRef, ComponentFactoryResolver, AfterViewChecked, AfterViewInit, ChangeDetectorRef, OnInit, AfterContentInit, SimpleChanges, DoCheck, NgZone } from '@angular/core';
import { NgControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { FieldErrorComponent } from '../components/common/field-error/field-error.component';
export const ERROR_MESSAGE = {
  required: (par, field: string) => `${field} is required.`,
  minlength: (par, field: string) => `Minimum ${par.requiredLength} chars are required for ${field}.`,
  maxlength: (par, field: string) => `Maximum ${par.requiredLength} chars are allowed for ${field}.`,
  pattern: (par, field: string) => `${field} is invalid.`
};
@Directive({
  selector: '[appFieldError]'
})
export class FieldErrorDirective implements DoCheck {
  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef,
    private _control: NgControl,
    private zone: NgZone

  ) {
  }

  ngDoCheck() {
    this.zone.runOutsideAngular(() => {
      this._viewContainerRef.clear();
    
      if (this._control.invalid) {
        const factory = this._componentFactoryResolver.resolveComponentFactory(FieldErrorComponent);
        const componentRef = this._viewContainerRef.createComponent(factory)
        const controlErrors: ValidationErrors = this._control.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            componentRef.instance.error = ERROR_MESSAGE[keyError](this._control.getError(keyError), this.decamelize(this._control.name));

          });
        }
      }
    });
  }



  decamelize(controlName: any): string {
    if ((typeof controlName) !== 'string') {
      return controlName;
    }
    controlName = controlName.split(/(?=[A-Z])/).join(' ');
    controlName = controlName[0].toUpperCase() + controlName.slice(1);
    return controlName;
  }

}
