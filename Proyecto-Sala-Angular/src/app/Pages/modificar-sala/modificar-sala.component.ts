import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/Model/Sala';
import { ApiSalaService } from 'src/app/services/api-sala.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-sala',
  templateUrl: './modificar-sala.component.html',
  styleUrls: ['./modificar-sala.component.css']
})
export class ModificarSalaComponent implements OnInit {

  sala: Sala;
  salaCampo: Sala = new Sala();
  constructor(public apiSala: ApiSalaService, public router: Router) { }

  ngOnInit(): void {
    this.apiSala.Get_Sala().subscribe(
      valor=> {
        valor.forEach(element => {
          var fechaData = element.fecha.substr(0, 10);
          element.fecha = moment(fechaData).format('yyyy-MM-DD')
        });
        this.sala = valor
      },
      error=>console.log('te dio errror')
    )
  }

  ModificarSala(){
    this.apiSala.UpdateSala(this.salaCampo).subscribe(
      valor=>{
        console.log("Todo corecto")
        this.router.navigate(['/modificar-sala']);
      },
      ()=>console.log("Te dio u error")
    )
  }

  CompletarCampos(objeto){
    console.log(objeto)
    this.salaCampo = objeto;
  }
}
