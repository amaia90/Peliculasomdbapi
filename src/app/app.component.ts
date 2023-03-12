import { Component } from '@angular/core';
import { IPeliculas } from './ipeliculas';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opcionSeleccionado:string="";
  verSeleccionado:string="";

  peliculas!: any[];
 
  constructor(private _http: HttpClient) { }

  
  ngOnInit() {
    this._http.get('/assets/datos/datos.json').subscribe(data => {
      this.peliculas = data as any[]
      console.log(this.peliculas);
    }
  )
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccionado = this.opcionSeleccionado;
    console.log(this.verSeleccionado);
}
}
