import { Component, OnInit } from '@angular/core';
import { ParceirosService } from '../parceiros.service';


@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.sass']
})
export class ContatosListagemComponent implements OnInit {

  contatos: Array<any>;

  constructor(private parceiroService: ParceirosService) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    this.parceiroService.listar().subscribe(dados => this.contatos = dados);
  }

}
