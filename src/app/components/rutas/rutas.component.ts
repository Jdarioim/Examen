import { Component, OnInit } from '@angular/core';
import { RutasService, Ruta } from 'src/app/services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent {

  rutas:Ruta[]=[];

  constructor  (private _rutaSericio:RutasService, private router:Router){

  }

  verRuta(idx : number){
    console.log(idx);
    this.router.navigate(['./ruta', idx])
  }
  ngOnInit():void {
    this.rutas = this._rutaSericio.getHeroes();
    console.log(this.rutas);

  }
 

}
