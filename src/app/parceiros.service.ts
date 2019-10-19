import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParceirosService {

  parceirosUrl = 'http://api.infocomn.com.br/public/api/dados'
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.parceirosUrl}`);
  }
}
