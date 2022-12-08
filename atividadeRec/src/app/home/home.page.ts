// Imports 
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms'; // imports responsaveis pelo formulario 
import { Guid} from 'guid-typescript'; // import responsavel pelos ID´s
import { Produto } from '../models/produto.model'; // Molde para info de produtos 
import { ProdutosService } from '../services/produtos.service'; // Service criado 



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  private produto : Produto
  public produtoForm : FormGroup 
  public arrayProdutos : any

  constructor(
    private formBuilder : FormBuilder,
    private produtoServices : ProdutosService
  ) {}


  ngOnInit() {
    // inicio da validação do formulario 

    this.produto = { id: Guid.createEmpty(), nome:"", valor:"", quantidade:""}

    this.produtoForm = this.formBuilder.group
    ({
      id : [this.produto.id],
      nome : [this.produto.nome, Validators.required, Validators.minLength(3)],
      valor : [this.produto.valor, Validators.required],
      quantidade : [this.produto.quantidade, Validators.required]
    })
  }

  enviar() {
    if (this.produtoForm.valid){
      this.produtoServices.inserir(this.produtoForm.value)
    }
  }
}
