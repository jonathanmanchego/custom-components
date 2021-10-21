import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Component, Input, OnInit, forwardRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCustomComponent),
      multi: true
    }
  ]
})
export class SelectCustomComponent implements OnInit, ControlValueAccessor {
  @Input() data: Array<{
    id: number,
    name: string,
    icono: string | undefined
  }> = [];
  @Input() iconoDesplegable = '';
  value = 0;
  itemSelected: { id: number, name: string, icono: string | undefined } | undefined;
  isDisabled = false;
  isOpen = false;
  @HostListener('click', ['$event']) desactivate($event: any): void {
    console.log($event);
  }
  onChange = (_: any) => { };
  onTouch = () => { };
  constructor() { }

  ngOnInit(): void {
  }
  selectedValue(value: number): void {
    this.onChange(value);
    this.onTouch();
    this.isOpen = false;
  }
  writeValue(obj: number): void {
    if (obj) {
      this.value = obj;
      this.itemSelected = this.data.find(item => item.id === this.value);
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
  toggleList(): void {
    this.isOpen = !this.isOpen;
  }
}
