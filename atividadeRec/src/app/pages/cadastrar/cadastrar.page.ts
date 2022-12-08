import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms'
import { Guid } from 'guid-typescript';
import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  private produto : Produto
  public produtoForm : FormGroup
  public arrayProduto : any

  constructor(
    private formBuilder : FormBuilder,
    private produtoService : ProdutosService
  ) { }

  ngOnInit() {
    this.produto = {id: Guid.createEmpty(), nome:"", valor: "", quantidade: ""}

    this.produtoForm = this.formBuilder.group({
      id : [this.produto.id],
      nome: [this.produto.nome, Validators.required],
      valor: [this.produto.valor, Validators.required],
      quantidade: [this.produto.quantidade, Validators.required]
    })
  }

  enviar(){
    if (this.produtoForm.valid){
      this.produtoService.inserir(this.produtoForm.value)
    }
  }

}
