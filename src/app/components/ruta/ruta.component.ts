import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RutasService } from 'src/app/services/rutas.service';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent implements OnInit{
  ruta: any ={}  
constructor(private activateRoute: ActivatedRoute, private _rutaSericio:RutasService) {
  
  this.activateRoute.params.subscribe(params =>{ 
    this.ruta=_rutaSericio.getHeroe(params ['id'] ); 
    console.log (this.ruta);
  })
}
  ngOnInit(): void {
    
  }
}
