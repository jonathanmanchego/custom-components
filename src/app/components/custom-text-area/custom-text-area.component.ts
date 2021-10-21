import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-text-area',
  templateUrl: './custom-text-area.component.html',
  styleUrls: ['./custom-text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomTextAreaComponent),
      multi: true
    }
  ]
})
export class CustomTextAreaComponent implements OnInit, ControlValueAccessor {
  @Input() patron: string[] = [];
  @Input() rows = 1;
  value = '';
  dataParseada = '';
  isDisabled = false;
  onChange = (_: any) => { };
  onTouch = () => { };
  constructor() { }
  escribiendo(evento: KeyboardEvent): void {
    const data = (evento.target as HTMLTextAreaElement).value;
    console.log(data);
    this.value = data;
    this.dataParseada = this.parseandoData(data);
    this.onChange(data);
  }
  pressingEnter(): void {
    this.value += '**n**';
    this.dataParseada += '<br/>';
  }
  parseandoData(data: string): string {
    for (const patr of this.patron) {
      data = data.split(patr).join(`<div class="patron-span"> ${patr} </div>`);
      data = data.split('↵').join(`<br/>`);
      data = data.split('**n**').join(`<br/>`);
    }
    return data;
  }
  writeValue(obj: string): void {
    if (obj) {
      this.value = obj;
      this.dataParseada = this.parseandoData(this.value);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(value = false): void {
    this.isDisabled = value;
  }
  ngOnInit(): void { }
}
