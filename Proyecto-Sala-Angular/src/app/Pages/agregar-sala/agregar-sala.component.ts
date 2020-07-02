import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/Model/Sala';
import { ApiSalaService } from 'src/app/services/api-sala.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-agregar-sala',
  templateUrl: './agregar-sala.component.html',
  styleUrls: ['./agregar-sala.component.css']
})
export class AgregarSalaComponent implements OnInit {

  sala: Sala = new Sala();
  constructor(public apiSala: ApiSalaService) { }

  ngOnInit(): void {
  }

  AgregarSala(){
    this.apiSala.Post_Sala(this.sala).subscribe(
      ()=>console.log("Se agregaron los datos"),
      ()=> console.log("Se dio un error") 
    )
  }

}
