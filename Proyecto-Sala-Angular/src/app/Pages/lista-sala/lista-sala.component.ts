import { Component, OnInit } from '@angular/core';
import { ApiSalaService } from 'src/app/services/api-sala.service';
import { Sala } from 'src/app/Model/Sala';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-sala',
  templateUrl: './lista-sala.component.html',
  styleUrls: ['./lista-sala.component.css']
})
export class ListaSalaComponent implements OnInit {
  public isala: Sala;
  constructor(public apiSala: ApiSalaService, public router: Router) { }

  ngOnInit(): void {
    this.apiSala.Get_Sala().subscribe(
      valor=> {
        this.isala = valor
      },
      error=> console.log('te dio un error')
    )
  }

  EliminarSala(objeto){
    console.log(objeto.ID)
   this.apiSala.Delete_Sala(objeto.ID).subscribe(
     ()=>{this.router.navigate(['/listar-sala']); console.log('Todo corecto y yo que me alegro')},
     ()=>console.log('Todo mal seba')
   )
  }

}