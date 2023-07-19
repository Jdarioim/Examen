import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RutasService } from './services/rutas.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    BuscadorComponent,
    RutaComponent,
    RutasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RutasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
