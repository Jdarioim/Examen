import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'rutas', component:RutasComponent},
  {path: 'ruta/:id', component:RutaComponent},
  {path: 'buscador/:termino', component:BuscadorComponent},
  {path: '**', pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
