import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor() { }
  title = 'custom-components';
  body = 'hola como estas marco sit please';
  patrones = ['{hola}', 'lorem', 'sit'];
  form = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl(this.body, [Validators.required])
    });
  }
  save(): void {
    console.log(this.form?.value);
  }
}
