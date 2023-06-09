import { ProdutoDTO } from './../dtos/produtos.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private client: HttpClient) {}

  public findAll(): Observable<ProdutoDTO[]>{
    return this.client.get<ProdutoDTO[]>('http://localhost:8081/produto');
  }

}
