import { DesignHomeComponent } from './design-home/design-home.component';
import { PrincipalComponent } from './principal/principal.component';
import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistasRoutingModule } from './vistas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    PrincipalComponent,
    DesignHomeComponent
  ],
  imports: [
    CommonModule,
    VistasRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule
  ]
})
export class VistasModule { }
