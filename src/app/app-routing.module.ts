import { DesignHomeComponent } from './vistas/design-home/design-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customs',
    loadChildren: () => import('./vistas/vistas.module').then(m => m.VistasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
