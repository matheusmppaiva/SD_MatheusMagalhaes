import { ProdutoService } from './../../services/produto.service';
import { ProdutoDTO } from './../../dtos/produtos.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-tabela',
  templateUrl: './produto-tabela.component.html',
  styleUrls: ['./produto-tabela.component.scss']
})
export class ProdutoTabelaComponent implements OnInit {

  produtos : ProdutoDTO[] = [];

  constructor( private service: ProdutoService){}

  ngOnInit(): void {
    this.service.findAll().subscribe(
      {
        next: (data) => this.produtos = data,
        error: (e) => console.error(e)
      }
    );
  }
}
