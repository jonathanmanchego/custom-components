import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextAreaComponent } from './custom-text-area/custom-text-area.component';
import { MatChipsModule } from '@angular/material/chips';
import { CustomSlideImagesComponent } from './custom-slide-images/custom-slide-images.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CustomTextAreaComponent,
    CustomSlideImagesComponent,
    SelectCustomComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [
    CustomTextAreaComponent,
    CustomSlideImagesComponent,
    SelectCustomComponent
  ]
})
export class ComponentsModule { }
