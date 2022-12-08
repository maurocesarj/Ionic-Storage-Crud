import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  private produto : Produto
  public produtoForm : FormGroup
  public arrayProduto : any
  alertController: any;
  handlerMessage: string;
  roleMessage: string;

  constructor(
    private formBuilder : FormBuilder,
    private produtoService : ProdutosService,
    private objprodutos : ProdutosService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.produtoService.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }

  adicionar(id){

  this.produtoService.deletaDados(id)
    console.log(id)
  }


  adiciona(){

  }
}
