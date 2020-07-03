import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarSalaComponent } from './Pages/agregar-sala/agregar-sala.component';
import { ListaSalaComponent } from './Pages/lista-sala/lista-sala.component';
import { ModificarSalaComponent } from './Pages/modificar-sala/modificar-sala.component';


const routes: Routes = [
  {path: 'agregar-sala', component: AgregarSalaComponent},
  {path: 'listar-sala', component: ListaSalaComponent},
  {path: 'modificar-sala', component: ModificarSalaComponent},
  {path: '', component: ListaSalaComponent},
  {path: '**', component: ListaSalaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
