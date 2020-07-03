import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from '../resources/url';

@Injectable({
  providedIn: 'root'
})
export class ApiSalaService{

  private url_sala: string;
  constructor(private httpclient: HttpClient) { 
    this.url_sala = URL.url}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public Get_Sala():Observable<any>{
      return this.httpclient.get(this.url_sala+'api/sala/obtener', this.httpOptions);  
  }

  Post_Sala(objeto):Observable<any>{
    return this.httpclient.post(this.url_sala+'api/sala/guardar', JSON.stringify(objeto), this.httpOptions);
  }

  Delete_Sala(id: number):Observable<any>{
    console.log(id);
    return this.httpclient.delete(this.url_sala+`api/sala/delete?id=${id}`);
  }

  UpdateSala(objeto):Observable<any>{
    return this.httpclient.put(this.url_sala+'api/sala/update', JSON.stringify(objeto), this.httpOptions);
  }
}
