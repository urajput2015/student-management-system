import { Component, OnInit } from '@angular/core';
import { ComponentBase } from 'src/app/helpers/component-base.class';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent extends ComponentBase implements OnInit {

  constructor(private route: ActivatedRoute,
    private _fb: FormBuilder
  ) {
    super(route)
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this._fb.group({
      description: [''],
      type: ['']
    })
  }

}
