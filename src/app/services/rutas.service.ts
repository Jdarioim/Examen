import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService{
  private rutas:Ruta[]= [
    {
      origen: "Machala",
      destino: "Guayaquil",
      precio: "$7.50",
      descripcion: "bus 20, anden 30",
      tipo: "interno"
    },
    {
      origen: "Machala",
      destino: "Huaquillas",
      precio: "$3.5",
      descripcion: "bus 10, anden 29",
      tipo: "interno"
    },
    {
      origen: "Machala",
      destino: "Arenillas",
      precio: "$2,50",
      descripcion: "bus 10, anden 30",
      tipo: "interno"
    },
    {
      origen: "Guayaquill",
      destino: "Portoviejo",
      precio: "$15",
      descripcion: "bus 20, anden 29",
      tipo: "externo"
    },
    {
      origen: "Guayaquil",
      destino: "Esmeraldas",
      precio: "$18,30",
      descripcion: "bus 18, anden 30",
      tipo: "interno"
    },
    {
      origen: "Guayaquil",
      destino: "Loja",
      precio: "$3.50",
      descripcion: "bus 11, anden 29",
      tipo: "externo"
    },
    {
      origen: "Loja",
      destino: "Machala",
      precio: "$3.50",
      descripcion: "bus 16, anden 30",
      tipo: "interno"
    },
    {
      origen: "Loja",
      destino: "Quito",
      precio: "$3.50",
      descripcion: "bus 18, anden 29",
      tipo: "externo"
    },
    {
      origen: "Loja",
      destino: "Machala",
      precio: "$3.50",
      descripcion: "bus 25, anden 30",
      tipo: "interno"
    }
  ];

  getHeroes(){
    return this.rutas;
  }

  getHeroe(idx: number){
    return this.rutas[idx];
  }

  constructor() {
    console.log ("Servicio listo para usar....")
   }
   buscarheroes(termino:string){
    let heroesArr:Ruta[]=[];
    termino = termino.toLowerCase();
  
    for(let heroe of this.rutas){
      let CiudadOrigen = heroe. origen.toLowerCase();
      if(CiudadOrigen.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
      let CiudadDestino = heroe. destino.toLowerCase();
      if(CiudadDestino.indexOf(termino)>=0){
        heroesArr.push(heroe)
      }
    }
      return heroesArr;
  
    }
  
   }

export interface Ruta{
  origen: string;
  destino: string;
  precio: string;
  descripcion: string;
  tipo: string;

}
