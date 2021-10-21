import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-home',
  templateUrl: './design-home.component.html',
  styleUrls: ['./design-home.component.scss']
})
export class DesignHomeComponent implements OnInit {
  form = new FormGroup({
    item: new FormControl(3, Validators.required)
  });
  listaItems = [
    {
      id: 1,
      nombre: 'jose'
    },
    {
      id: 2,
      nombre: 'juan'
    },
    {
      id: 3,
      nombre: 'pepe'
    }
  ];
  constructor() { }

  ngOnInit(): void {

  }
  get listaData(): Array<{
    id: number,
    name: string,
    icono: undefined | string
  }> {
    return this.listaItems.map(item => {
      return {
        id: item.id,
        name: item.nombre,
        icono: item.nombre === 'pepe' ? 'error' : undefined
      };
    });
  }
  showRpta(): void {
    console.log(this.form.value);
  }
}
