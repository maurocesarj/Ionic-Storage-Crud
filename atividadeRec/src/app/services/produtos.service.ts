// imports
import { Injectable } from '@angular/core';

import { Produto } from '../models/produto.model'; // Molde de informações do produto
import { Guid } from 'guid-typescript'; // Import responsavel pelos ID´s
import { Storage } from '@ionic/storage-angular'; // Import do Storage ( banco de dados )
import { SrvRecord } from 'dns';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private storage: Storage 
  ) { }

  // Metodo passdo para criar novo registro 
  inserir(argumento : Produto) {
    argumento.id = Guid.create()// Cria o ID

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async listarTodos() {
    let arrayProdutos : Produto [] = []

    await this.storage.forEach((value: string) => {const produto: Produto  = JSON.parse(value); arrayProdutos.push(produto)})

    return arrayProdutos;
  }

  deletaDados(id : string){
    //console.log(id)
    this.storage.remove(id)
  }

  adiconaDados(){}

  
}
