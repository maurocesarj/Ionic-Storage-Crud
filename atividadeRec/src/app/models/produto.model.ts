// import do Guid que será responsavél para a criação do ID do produto 
import { Guid } from "guid-typescript";


// este será o molde com as informações que serão solicitadas no cadastro de um novo produto
export interface Produto {
    id: Guid
    nome: string
    valor: string
    quantidade: string
}